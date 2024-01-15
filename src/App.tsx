import "./App.css";
import { RangedChart } from "./components/charts/rangedChart";
import { RealtimeChart } from "./components/charts/realtimeChart";

function App() {
  return (
    <div className="p-4">
      <div className="flex items-center justify-center py-4">
        <h1 className="text-2xl">
          Bienvenue sur votre platforme de visualisation
        </h1>
      </div>
      <br />
      <div className="grid grid-cols-2 gap-5">
        <RealtimeChart />
        <RangedChart />
      </div>
    </div>
  );
}

export default App;
