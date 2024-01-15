import { useEffect, useState } from 'react';
import './App.css'
import { useAirqinoAPi } from './hooks/useAirqinoApi'
import { usePolling } from './hooks/usePolling';
import { CustomDropDown } from './components/dropDown';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box, FormControl } from '@mui/material';
import { CustomDatePicker } from './components/customDatePicker';
import { Particules, Stations } from './utils/constant';
import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';
import { RangedChart } from './components/charts/rangedChart';

function App() {
  // const data = usePolling();

  const chartOptions: ApexOptions = {
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z",]
    },
    tooltip: {
      x: {
        format: 'dd-MM-yy HH:mm'
      },
    },
  }


  return (
    <div className='p-4'>
      <div className='flex items-center justify-center py-4'>
        <h1 className='text-2xl'>Bienvenue sur votre platforme de visualisation</h1>
      </div>
      <br />
      <div className='grid grid-cols-2 gap-5'>
        <div>
          <h2 className='ml-2 font-bold '>Visualisation en temps réel</h2>
          <div className='grid grid-cols-2 gap-x-2'>
            <CustomDropDown options={Stations} placeholder='Station' value={''} onChange={(e) => console.log(e)} />
            <CustomDropDown options={Particules} placeholder='Particule' value={''} onChange={(e) => console.log(e)} />
            {/* <CustomDropDown placeholder='Name' value={''} onChange={(e) => console.log(e)} /> */}
          </div>
          {/* <div className='w-full h-96 bg-slate-400 rounded-md'></div> */}
          <ReactApexChart width={'100%'} height={'384px'} type='area' options={chartOptions} series={[{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
          }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
          }]} ></ReactApexChart>
          <button className='border px-3 py-2 rounded-md mt-1 hover:border-cyan-950 transition-colors'>Visualiser</button>
        </div>
        <RangedChart />
      </div>
    </div>
  )
}

export default App
