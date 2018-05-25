import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./actions/actionsDetailsTable";

const DetailsTable = (props) => {
    return(
      <div className="col-xs-12">  
        <div>
        <div>
          <ul className="list-group">
            <li className="list-group-item list-group-item-success">
              <h2>Selected NEO details</h2>
            </li>
            <li className="list-group-item">
              <h2>{`Name: ${props.selected ? props.selected.name : ''}`}</h2>
            </li>
            <li className="list-group-item">
              <h2>{`Estimated diameter [m]: ${props.selected ? props.selected.estimated_diameter.meters.estimated_diameter_min.toFixed(2) : ''}`}</h2>
            </li>
            <li className="list-group-item">
              <h2>{`Radius of DESTRUCTION [m]: ${props.radius ? props.radius.toFixed(2) : ''}`}</h2>
            </li>
          </ul>
        </div>
        </div>
      </div>
    );
  };

  export default connect(mapStateToProps, mapDispatchToProps)(DetailsTable);