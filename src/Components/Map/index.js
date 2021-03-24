import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
const virginia_data = require('../../data/loan_data_VA_Geocode');

const containerStyle = {
    width: '90vw',
    height: '60vh',
    alignSelf: 'center',
    marginBottom: '50px'
};

const center = {
    lng: -73.9934,
    lat: 40.7505
};

function MapComponent() {

    // const [locations, setLocations] = useState([]);

    // const fetchLocations = async () => {
    //     try {
    //         const response = await fetch('https://api.jsonbin.io/b/605a96b7c197e473302dd37e')
    //         const data = await response.json();
    //         setLocations(data);
    //     } catch(error) {
    //         console.error(error);
    //     }
    // }

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY
    });

    const [map, setMap] = React.useState(null)
    const [ selected, setSelected ] = React.useState(null);

    const onSelect = item => {
        setSelected(item);
    }
    const onLoad = React.useCallback(function callback(map) {
        // const bounds = new window.google.maps.LatLngBounds();
        // map.fitBounds(bounds);
        setMap(map)
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    // useEffect(() => {
    //     fetchLocations();
    // })

    // console.log(locations);

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { 
                virginia_data.map((item, index) => {
                    return (
                        <Marker 
                            key={'marker' + index} 
                            position={{lat: item.lat_long[0], lng: item.lat_long[1]}}
                            // position={center}
                            // icon={compostIcon} 
                            onClick={() => onSelect(item)} //item in the array of data
                        />
                    )
                })
            }
            {
            selected ? (
                <InfoWindow
                    position={{lat: selected.lat_long[0], lng: selected.lat_long[1]}}
                    // position={center}
                    clickable={true}
                    onCloseClick={() => setSelected(null)}
                >
                    <div>
                        <p>I am a Marker's InfoWindow</p>
                    </div>
                </InfoWindow>
                ) : <></>
            }

        </GoogleMap>
    ) : <p>Loading...</p>
}

export default React.memo(MapComponent);
