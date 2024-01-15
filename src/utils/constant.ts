const Stations = ['SMART188', 'SMART189'];
const Particules = ["CO", "CO2", "NO2", "O3", "PM10", "PM2.5", "RH", "T", "Temp. int.", "VOC",];
const currentDate = new Date();
const yesterday = new Date();
yesterday.setDate(currentDate.getDate() - 1);
const dayBeforeYesterday = new Date();
dayBeforeYesterday.setDate(currentDate.getDate() - 2);

export { Stations, Particules, yesterday, dayBeforeYesterday };