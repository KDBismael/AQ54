const Stations = ['SMART188', 'SMART189'];
const Particules = ["CO(mg/m3)", "NO2(µg/m³)", "O3(µg/m³)", "PM10(µg/m³)", "PM2.5(µg/m³)", "RH(%)", "T(°C)", "Temp. int.(°C)"];
const currentDate = new Date();
const yesterday = new Date();
yesterday.setDate(currentDate.getDate() - 1);
const dayBeforeYesterday = new Date();
dayBeforeYesterday.setDate(currentDate.getDate() - 2);

export { Stations, Particules, yesterday, dayBeforeYesterday };