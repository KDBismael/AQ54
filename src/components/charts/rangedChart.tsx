import { useEffect, useState } from "react";
import { useAirqinoAPi } from "../../hooks/useAirqinoApi";
import dayjs, { Dayjs } from "dayjs";
import { ApexOptions } from "apexcharts";
import { CustomDropDown } from "../dropDown";
import { CustomDatePicker } from "../customDatePicker";
import ReactApexChart from "react-apexcharts";
import {
  Particules,
  Stations,
  dayBeforeYesterday,
  yesterday,
} from "../../utils/constant";

export const RangedChart = () => {
  const { getStationRangedValues } = useAirqinoAPi();

  const [isFetching, setIsFetching] = useState(false);
  const [station, setStation] = useState("SMART188");
  const [particule, setParticule] = useState("CO");
  const [start, setStart] = useState<Dayjs | null>(dayjs(dayBeforeYesterday));
  const [end, setEnd] = useState<Dayjs | null>(dayjs(yesterday));
  const [particuleData, setParticuleData] = useState<
    {
      timestamp: string;
      value: string | number;
    }[]
  >([{ timestamp: "", value: 0 }]);

  const chartOptions: ApexOptions = {
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadiusApplication: "around",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: particuleData?.map((p) => p.timestamp),
    },
    tooltip: {
      x: {
        format: "dd-MM-yy HH:mm",
      },
    },
  };

  const visualize = () => {
    setIsFetching(true);
    if (station == "" && particule == "" && start == null && end == null)
      return;
    console.log(isFetching);
    getStationRangedValues(
      station,
      start?.format("YYYY-MM-DD") as string,
      end?.format("YYYY-MM-DD") as string
    ).then((e) => {
      const data = e.map((d) => {
        return {
          timestamp: d.utc_timestamp,
          value: d[particule.toLowerCase()],
        };
      });
      console.log(e);
      setParticuleData(data);
      setIsFetching(false);
    });
  };
  useEffect(() => {
    visualize();
  }, []);
  return (
    <div>
      <h2 className="ml-2 font-bold ">
        Visualisation Part intervalle de temps(jours)
      </h2>
      <div className="grid grid-cols-4 gap-x-2">
        <CustomDropDown
          options={Stations}
          placeholder="Station"
          value={station}
          onChange={(e) => setStation(e.target.value)}
        />
        <CustomDropDown
          options={Particules}
          placeholder="Particule"
          value={particule}
          onChange={(e) => setParticule(e.target.value)}
        />
        <CustomDatePicker
          value={start}
          onChange={(e) => setStart(e)}
          label={"Debut"}
        />
        <CustomDatePicker
          value={end}
          onChange={(e) => setEnd(e)}
          label={"Fin"}
        />
        {/* <div className=''>
            </div> */}
      </div>
      {/* <div className='w-full h-96 bg-slate-400 rounded-md'></div> */}
      <ReactApexChart
        width={"100%"}
        height={"384px"}
        type="bar"
        options={chartOptions}
        series={[
          {
            name: particule,
            data: particuleData.map((d) => d.value as number),
          },
        ]}
      ></ReactApexChart>

      <button
        disabled={isFetching}
        onClick={visualize}
        className={`border px-3 py-2 rounded-md mt-1 hover:border-cyan-950 transition-colors ${
          isFetching ? " opacity-50   cursor-not-allowed" : null
        }`}
      >
        Visualiser
      </button>
    </div>
  );
};
