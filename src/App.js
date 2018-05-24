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
        console.log(newArr);
      let argh = flatten(newArr);
        console.log(argh);
      this.props.addArr(argh);
        console.log(this.props.addArr(argh));
    })
  };

  onClickFn = (neo) => {
      console.log(neo.name);
    this.props.gotSelected(neo.name);
      console.log(this.props.selected);
    let arr = values(neo);
    this.props.addData(arr);
      console.log(arr);
    this.props.getRadius(arr[5].meters.estimated_diameter_min)
      console.log(arr[5].meters.estimated_diameter_min)
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <SearchBar handleSubmit={this.handleSubmit} onClickFn={this.onClickFn} />
          <Simulation />
        {/* <div>
          <h1>Wybrana data: {this.props.startDate} do {this.props.endDate}</h1>
        </div> */}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

//todo
//posegregowac
//drugi komponent z details
//google api

//className="container"

