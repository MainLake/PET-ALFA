import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapComponent = () => {
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const [markerCoordinates, setMarkerCoordinates] = useState([]);
  const [markerAddress, setMarkerAddress] = useState('');

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiamVhYzA0IiwiYSI6ImNsb3dhYzc3YzB5cjUyb252cmt1bXJnbmkifQ.oC8AUueGT_XpshmXhDJm4A';

    const loadMap = () => {
      const newMap = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-92.2634434, 14.8958973],
        zoom: 12.2,
      });

      setMap(newMap);

      const initialMarker = new mapboxgl.Marker({
        draggable: true,
      })
        .setLngLat([-92.2634434, 14.8958973])
        .addTo(newMap);

      setMarker(initialMarker);
      setMarkerCoordinates(initialMarker.getLngLat().toArray());

      initialMarker.on('drag', handleMarkerDrag);

      // Actualizar posición en tiempo real cuando el mapa se mueve
      newMap.on('move', () => {
        const newCoordinates = initialMarker.getLngLat().toArray();
        setMarkerCoordinates(newCoordinates);

        // Utilizar la API de geocodificación inversa de Mapbox
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${newCoordinates[0]},${newCoordinates[1]}.json?access_token=${mapboxgl.accessToken}`)
          .then(response => response.json())
          .then(data => {
            const address = data.features[0].place_name;
            setMarkerAddress(address);
          })
          .catch(error => {
            console.error('Error en la geocodificación inversa:', error);
            setMarkerAddress('Dirección no disponible');
          });
      });
    };

    if (!mapboxgl.supported()) {
      console.error('Mapbox GL no es compatible con este navegador');
      return;
    }

    if (!mapboxgl.accessToken) {
      console.error('Token de acceso de Mapbox no proporcionado');
      return;
    }

    if (!window.mapboxgl) {
      const script = document.createElement('script');
      script.src = 'https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.js';
      script.async = true;
      script.onload = loadMap;

      document.body.appendChild(script);
    } else {
      loadMap();
    }

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  const handleMarkerDrag = () => {
    if (marker) {
      const newCoordinates = marker.getLngLat().toArray();
      setMarkerCoordinates(newCoordinates);
    }
  };

  return (
    <div>
      <div id="map" style={{ width: '100%', height: '400px' }} />
      {markerCoordinates.length > 0 && (
        <div>
          <p>{markerAddress}</p>
        </div>
      )}
    </div>
  );
};

export default MapComponent;