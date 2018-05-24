import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Circle
} from "react-google-maps";

const MapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `500px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={10} defaultCenter={{ lat: 65.603, lng: -16.996 }}>
    {props.isMarkerShown && 
    <Marker 
      position={{ lat: 65.603, lng: -16.996 }} 
      
    />}
    <Circle
      defaultRadius={6000} defaultCenter={{ lat: 65.603, lng: -16.996 }} visible={true} radius={props.radius}
    />
  </GoogleMap>
));

export default MapComponent;
