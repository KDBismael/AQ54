interface SensorData {
    sensor: string;
    unit: string;
    value: number;
}
interface StationData {
    station_name: string;
    timestamp: string;
    values: SensorValue[];
}

interface RangedDataItem {
    [key: string]: number | string
    AUX1_INPUT: number | null;
    AUX2_INPUT: number | null;
    co: number;
    co2: number;
    extT: number;
    intT: number;
    lat: number;
    lon: number;
    no2: number;
    o3: number;
    pm10: number;
    pm25: number;
    rh: number;
    utc_timestamp: string;
    voc: number;
};

interface ParticuleData {
    timestamp: string;
    value: string | number;
}

interface RangedStationData {
    raw_data: RangedDataItem[];
};