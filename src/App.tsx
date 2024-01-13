import { useEffect, useState } from 'react';
import './App.css'
import { useAirqinoAPi } from './hooks/useAirqinoApi'
import { usePolling } from './hooks/usePolling';

function App() {
  const { getStationRangedValues } = useAirqinoAPi();
  // const data = usePolling();
  getStationRangedValues('SMART16', '2021-09-14', '2021-09-15').then((x) => {
    console.log(x);
  })
  return (
    <>
      <div className='flex items-center justify-center py-4'>
        <h1 className='text-2xl'>Bienvenue sur votre platforme de visualisation</h1>
      </div>
    </>
  )
}

export default App
