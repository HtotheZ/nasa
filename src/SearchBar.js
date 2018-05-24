import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { mapStateToProps, mapDispatchToProps } from "./actions/actionsSearchBar";
import { connect } from "react-redux";
import AsteroidTable from "./AsteroidTable";

const SearchBar = (props) => {
    return (
        <div className="col-xs-6">
            <div>
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
                            </div>
                        </div>
                    </div>
                </form>
                <div>
                    <AsteroidTable onClickFn={props.onClickFn} />
                </div>
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

