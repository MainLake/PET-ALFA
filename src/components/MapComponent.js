import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

const MapComponent = () => {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 37.7749,
    longitude: -122.4194,
    zoom: 11,
  });

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={(newViewport) => setViewport(newViewport)}
      mapboxApiAccessToken={mapboxgl.accessToken} 
    />
  );
};

export default MapComponent;
