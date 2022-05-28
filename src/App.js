import './styles/App.css';
import Weather from './components/Weather/Weather';
import Info from './components/Info/Info';
import { useSelector } from 'react-redux';

function App() {
  const temp = useSelector((state) => state.condition)

  return (
    <div className={temp === "Sunny" ? "app sunny" : "app clouds"}>
      <Weather />
      <Info />
    </div>
  );
}

export default App;
