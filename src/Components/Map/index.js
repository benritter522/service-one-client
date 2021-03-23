import React from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

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

function MapComponent(props) {

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

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <Marker 
                // key={item.index} 
                // position={{lat: item.latitude, lng: item.longitude}}
                position={center}
                // icon={compostIcon} 

                // onClick={() => onSelect(item)} //item in the array of data
            />
            {
            selected ? (
                <InfoWindow
                    // position={{lat: selected.latitude, lng: selected.longitude}}
                    position={center}
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
