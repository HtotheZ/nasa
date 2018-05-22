import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { mapStateToProps, mapDispatchToProps } from "./actions/actionsSearchBar";
import { connect } from "react-redux";
import AsteroidTable from "./AsteroidTable";

const SearchBar = (props) => {
    return (
        <div>
            <div className="col-xs-6">
            <h2>NEO impact simulator</h2>
                <form onSubmit={props.handleSubmit}>
                    <div className="container">
                        <div className="row">
                            <div className ="col-xs-6">
                                <span> Start Date: </span><input type="date" value={props.startDate} onChange={(event) => props.setStartDate(event.target.value)}/>
                                <span> End Date: </span><input type="date" value={props.endDate} onChange={(event) => props.setEndDate(event.target.value)} />
                            </div>
                            <div className ="col-xs-6">
                                <button type="submit" className="btn btn-danger buttons" onClick={() => console.log(props.startDate, props.endDate)}>GO</button>
                                <p>{props.startDate}</p>
                            </div>
                        </div>
                    </div>
                </form>
                <div>
                    {/* <table>
                    <tbody>
                    {props.arr.map(neo => 
                    <tr>
                        {console.log(props.arr)}
                        <td>{neo.name}</td> 
                        <td>{neo.close_approach_data[0].close_approach_date}</td>
                        <td>{neo.estimated_diameter.meters.estimated_diameter_min.toFixed(2)}</td>
                        <td>{neo.estimated_diameter.meters.estimated_diameter_max.toFixed(2)}</td>
                    </tr>
                    )}
                </tbody>
                    </table> */}
                    <AsteroidTable />
                </div>
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

