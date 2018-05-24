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
      <div className="col-xs-6">
          <div>
              <MapComponent isMarkerShown radius={props.radius} />
              <DetailsTable />
          </div>
      </div>
    );
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Simulation);