import React from "react";
import GoogleMapReact from "google-map-react";
import './Map.css';

const Map = ({ coordinates, setBounds, setCoordinates }) => {

    return (
        <>
            <div className="main-map-component">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'Your_Api_Key' }}
                    defaultCenter={coordinates}
                    center={coordinates}
                    defaultZoom={14}
                    margin={[50, 50, 50, 50]}
                    //   options={''}
                    onChange={(e) => {
                        setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                        setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    }}
                //   onChildClick={''}
                >

                </GoogleMapReact>
            </div>
        </>
    );
}

export default Map;