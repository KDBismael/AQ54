import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { useState } from "react";
import { Particules, Stations } from "../../utils/constant";
import { usePolling } from "../../hooks/usePolling";
import { CustomDropDown } from "../dropDown";

export const RealtimeChart = () => {
  const data = usePolling();
  const [station, setStation] = useState("SMART188");
  const [particule, setParticule] = useState("CO");

  const chartOptions: ApexOptions = {
    chart: {
      id: "realtime",
      height: 350,
      type: "bar",
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 5000,
        },
      },
    },
    tooltip: {
      x: {
        format: "HH:mm",
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    legend: {
      show: false,
    },
    stroke: {
      curve: "smooth",
    },
    // xaxis: {
    //   type: "datetime",
    //   range: 10,
    //   categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z"],
    // },
    // tooltip: {
    //   x: {
    //     format: "dd-MM-yy HH:mm",
    //   },
    // },
  };
  return (
    <div>
      <h2 className="ml-2 font-bold ">Visualisation en temps réel</h2>
      <div className="grid grid-cols-2 gap-x-2">
        <CustomDropDown
          options={Stations}
          placeholder="Station"
          value={station}
          onChange={(e) => setStation(e.target.value)}
        />
        <CustomDropDown
          options={Particules}
          value={particule}
          onChange={(e) => setParticule(e.target.value)}
          placeholder="Particule"
        />
        {/* <CustomDropDown placeholder='Name' value={''} onChange={(e) => console.log(e)} /> */}
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
            data: data
              .filter((d) => d.sensor == particule.toLowerCase())
              .map((d) => d.value),
          },
        ]}
      ></ReactApexChart>
      <button className="border px-3 py-2 rounded-md mt-1 hover:border-cyan-950 transition-colors">
        Visualiser
      </button>
    </div>
  );
};
