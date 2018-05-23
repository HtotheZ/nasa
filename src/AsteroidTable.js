import React from 'react';
import { mapStateToProps, mapDispatchToProps } from "./actions/actionsAsteroidTable";
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';

const AsteroidTable = (props) => {
    return(
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Diameter Min [m]</th>
                    <th>Diameter Max [m]</th>
                    </tr>
                </thead>
                <tbody>
                    {props.arr.map(neo => 
                    <tr
                    onClick={() => props.onClickFn(neo)}
                    className={props.selected === neo.name ? 'table-success' : ''}>
                    {console.log(props.selected)}
                    {}
                        <td>{neo.name}</td> 
                        <td>{neo.close_approach_data[0].close_approach_date}</td>
                        <td>{neo.estimated_diameter.meters.estimated_diameter_min.toFixed(2)}</td>
                        <td>{neo.estimated_diameter.meters.estimated_diameter_max.toFixed(2)}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(AsteroidTable);
