import React from "react";
// import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./actions/actionsSimulation";
// import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import DetailsTable from "./DetailsTable";
import MapComponent from "./MapComponent";

const Simulation = (props) => {
    return (
      <div>
        <div className="col">
            <div>
                <MapComponent 
                  isMarkerShown 
                  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `400px` }} />}
                  mapElement={<div style={{ height: `100%` }} />} />
                <h3>Luka</h3>
                <DetailsTable />
            </div>
        </div>
      </div>
    );
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Simulation);