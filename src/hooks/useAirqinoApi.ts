import axios from "axios";

export const useAirqinoAPi = () => {
    const BASE_URL = 'https://airqino-api.magentalab.it';
    const getStationValues = async (station_name: String): Promise<SensorData[]> => {
        try {
            let { data } = await axios.get<StationData>(`${BASE_URL}/getCurrentValues/${station_name}`, {
                headers: {
                    Accept: 'application/json',
                },
            },);
            return data.values;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('error message: ', error.message);
                return [];
            } else {
                console.error('unexpected error: ', error);
                return [];
            }
        }
    };
    const getStationRangedValues = async (station_name: String, start: string, end: string) => {
        try {
            let { data } = await axios.get<RangedStationData>(`${BASE_URL}/getRange/${station_name}/${start}/${end}
`, {
                headers: {
                    Accept: 'application/json',
                },
            },);
            return data.raw_data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('error message: ', error.message);
                return [];
            } else {
                console.error('unexpected error: ', error);
                return [];
            }
        }
    };

    return { getStationRangedValues, getStationValues }
}