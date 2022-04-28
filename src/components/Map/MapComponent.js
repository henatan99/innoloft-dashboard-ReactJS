import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const MapComponent = (props) => {
    return (
        <Map
          google={props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: props.lat, lng: props.lng}}
        >
            <Marker position={{ lat: props.lat, lng: props.lng}} />
        </Map>
    );
}

const mapStyles = {
    width: '25%',
    height: '50%',
};

export default GoogleApiWrapper({
    apiKey: ''
})(MapComponent);