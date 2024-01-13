import { useEffect, useState } from 'react';
import './App.css'
import { useAirqinoAPi } from './hooks/useAirqinoApi'
import { usePolling } from './hooks/usePolling';
import { CustomDropDown } from './components/dropDown';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box } from '@mui/material';

function App() {
  const [cleared, setCleared] = useState<boolean>(false);
  const { getStationRangedValues } = useAirqinoAPi();
  // const data = usePolling();
  getStationRangedValues('SMART16', '2021-09-14', '2021-09-15').then((x) => {
    console.log(x);
  })

  useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => { };
  }, [cleared]);

  return (
    <div className='p-4'>
      <div className='flex items-center justify-center py-4'>
        <h1 className='text-2xl'>Bienvenue sur votre platforme de visualisation</h1>
      </div>
      <div className='grid grid-cols-2 gap-5'>
        <div>
          <span>visual 1</span>
          <div className='grid grid-cols-3 gap-2'>
            <CustomDropDown placeholder='Name' value={''} onChange={(e) => console.log(e)} />
            <CustomDropDown placeholder='Particule Name' value={''} onChange={(e) => console.log(e)} />
            <CustomDropDown placeholder='Name' value={''} onChange={(e) => console.log(e)} />
          </div>
          <div className='w-full h-56 bg-slate-400 rounded-md'></div>
        </div>
        <div>
          <span>visual 1</span>
          <div className='grid grid-cols-4 gap-2'>
            <CustomDropDown placeholder='Name' value={''} onChange={(e) => console.log(e)} />
            <CustomDropDown placeholder='Particule Name' value={''} onChange={(e) => console.log(e)} />

          </div>
          <div className='w-full h-56 bg-slate-400 rounded-md'></div>
        </div>
      </div>
      <br />
      <br />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker slotProps={{
          field: { clearable: true, onClear: () => setCleared(true) },
        }} label="Start" />
        <DesktopDatePicker className='h-0' slotProps={{
          field: { clearable: true, onClear: () => setCleared(true) },
        }} label="End" />
      </LocalizationProvider>
    </div>
  )
}

export default App
