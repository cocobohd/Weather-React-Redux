import './styles/App.css';
import React from 'react';
import Weather from './components/Weather/Weather';
import Info from './components/Info/Info';
import { useSelector } from 'react-redux';

function App() {
  const back = useSelector((state) => state.back)
  return (
    <div className="app" style={{backgroundImage: `url(${back})`}}>
      <Weather />
      <Info />
    </div>
  );
}

export default App;
