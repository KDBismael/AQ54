import { useEffect, useState } from "react";
import { useAirqinoAPi } from "./useAirqinoApi";

export const usePolling = () => {
  const [realtimeValues, setRealtimeValues] = useState<SensorData[]>([]);
  const { getStationValues } = useAirqinoAPi();

  useEffect(() => {
    const timeout = setInterval(async () => {
      const values = await getStationValues("SMART160");
      setRealtimeValues((prev) => [...prev, ...values]);
    }, 5000);
    () => clearInterval(timeout);
  }, []);

  return realtimeValues;
};
