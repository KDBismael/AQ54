import { useEffect, useState } from 'react';
import './App.css'
import { useAirqinoAPi } from './hooks/useAirqinoApi'
import { usePolling } from './hooks/usePolling';
import { CustomDropDown } from './components/dropDown';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box, FormControl } from '@mui/material';
import { CustomDatePicker } from './components/customDatePicker';

function App() {
  const { getStationRangedValues } = useAirqinoAPi();
  // const data = usePolling();
  getStationRangedValues('SMART16', '2021-09-14', '2021-09-15').then((x) => {
    console.log(x);
  })

  return (
    <div className='p-4'>
      <div className='flex items-center justify-center py-4'>
        <h1 className='text-2xl'>Bienvenue sur votre platforme de visualisation</h1>
      </div>
      <br />
      <div className='grid grid-cols-2 gap-5'>
        <div>
          <div className='grid grid-cols-3 gap-x-2'>
            <CustomDropDown placeholder='Name' value={''} onChange={(e) => console.log(e)} />
            <CustomDropDown placeholder='Particule Name' value={''} onChange={(e) => console.log(e)} />
            {/* <CustomDropDown placeholder='Name' value={''} onChange={(e) => console.log(e)} /> */}
          </div>
          <div className='w-full h-96 bg-slate-400 rounded-md'></div>
          <button className='border px-3 py-2 rounded-md mt-4 hover:border-cyan-950 transition-colors'>Visualiser</button>
        </div>
        <div>
          <div className='grid grid-cols-4 gap-x-2'>
            <CustomDropDown placeholder='Name' value={''} onChange={(e) => console.log(e)} />
            <CustomDropDown placeholder='Particule Name' value={''} onChange={(e) => console.log(e)} />
            <CustomDatePicker label={'Start'} />
            <CustomDatePicker label={'End'} />
            <div className=''>
            </div>
          </div>
          <div className='w-full h-96 bg-slate-400 rounded-md'></div>
          <button className='border px-3 py-2 rounded-md mt-4 hover:border-cyan-950 transition-colors'>Visualiser</button>
        </div>
      </div>
    </div>
  )
}

export default App
