import React, { Component } from 'react';
import SearchBar from "./SearchBar";
import Simulation from "./Simulation";
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

  render() {
    return(
      <div className="yo">
        <div className="row">
          <SearchBar handleSubmit={this.handleSubmit} />
          <Simulation />
        </div>
        <div>
          <h1>Wybrana data: {this.props.startDate} do {this.props.endDate}</h1>
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

