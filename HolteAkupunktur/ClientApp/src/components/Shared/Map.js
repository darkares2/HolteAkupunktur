import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
class Map extends Component {

    render() {
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
                defaultCenter={{ lat: 55.8119366, lng: 12.4717194 }}
                defaultZoom={17}
                defaultOptions
            >
                <Marker
                    title="Holte Akupunktur"
                    position={{ lat: 55.8119366, lng: 12.4717194 }}
                />
            </GoogleMap>
        ));
        return (
                <GoogleMapExample
                    containerElement={<div style={{ height: '100%', width: '100%' }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
        );
    }
};
export default Map;