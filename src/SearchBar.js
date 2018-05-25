import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { mapStateToProps, mapDispatchToProps } from "./actions/actionsSearchBar";
import { connect } from "react-redux";
import AsteroidTable from "./AsteroidTable";

const SearchBar = (props) => {
    return (
        <div className="col-6">
            <div>
            <ul className="list-group"><li className="list-group-item list-group-item-success"><h2>NEO impact simulator</h2></li></ul>
                <form onSubmit={props.handleSubmit}>
                    <div className="container">
                        <div className="row">
                            <div className ="col-6">
                                <span> Start Date: </span><input type="date" value={props.startDate} onChange={(event) => props.setStartDate(event.target.value)}/>
                            </div>
                            <div className ="col-6">
                                <span> End Date: </span><input type="date" value={props.endDate} onChange={(event) => props.setEndDate(event.target.value)} />
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

