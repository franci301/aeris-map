import logo from './logo.svg';
import AerisWeather from '@aerisweather/javascript-sdk';
import '@aerisweather/javascript-sdk/dist/styles/styles.css';
import { useEffect } from 'react';

function App() {
  
  useEffect(()=>{
    getMapInfo();
  },[])

const getMapInfo = async () =>{
  const aeris = new AerisWeather('S7qAPDYfude8398481Psc', 'yDdDEHeTLJcXa1D8JUJaxfd2eItkEzIBfUuscNd1');

  aeris.views().then((views) => {
    const map = new views.InteractiveMap('#map', {
        strategy: 'leaflet',
        zoom: 4,
        layers: 'satellite,radar'
    });
    
    // must wait for map to be ready before trying to update its view
    map.on('ready', () => {
        map.setCenter({ lat: 47.5, lon: -121.5 });
        map.setZoom(6);
    });
});
}

  return (
    <div className="App">
      Map
      <div id="map">

      </div>
    </div>
  );
}

export default App;
