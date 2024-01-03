import axios from "axios";

const useAirqinoAPi = () => {
    const BASE_URL = 'https://airqino-api.magentalab.it/';
    const getRealtimeValues = () => {
        console.log('realtime values');
    };
    const getRangedValues = () => {
        console.log('ranged values');
    };

    return { getRangedValues, getRealtimeValues }
}