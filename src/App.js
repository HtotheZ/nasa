import React, { Component } from 'react';
import SearchBar from "./SearchBar";
import Simulation from "./Simulation";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from  './actions/actionsApp'
import { getNeos } from "./queryAsteroid";
import { values, flatten } from "lodash"

class App extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    getNeos(this.props.startDate, this.props.endDate, this.props.apiKey).then(res => {
      const neoObj = res.data.near_earth_objects;
      let newArr = values(neoObj);
      let argh = flatten(newArr);
      this.props.addArr(argh);
    })
  };

  onClickFn = (neo) => {
    this.props.gotSelected(neo);
    const arr = values(neo);
    this.props.addData(arr);
    let radius = arr[5].meters.estimated_diameter_min * arr[4] * 10
    this.props.getRadius(radius)
  }

  render() {
    return(
      <div>
        <div className="row">
          <SearchBar handleSubmit={this.handleSubmit} onClickFn={this.onClickFn} />
          <Simulation />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


