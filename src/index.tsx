import React from 'react';
import ReactDOM from 'react-dom/client';
import mapboxgl from 'mapbox-gl';

import { MapsApp } from './MapsApp';

 
mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleGVsaXphZ2EiLCJhIjoiY2w1MnF0bWIwMGk1NzNibXljYzR1dnVjeiJ9.2SUZCHzUgAN93CWQvfe_wA';

if ( !navigator.geolocation ) {
  alert('Geolocation is not supported by your browser');
  throw new Error('Geolocation is not supported by your browser');
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
