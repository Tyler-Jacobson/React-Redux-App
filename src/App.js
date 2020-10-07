import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchClasses } from "./actions/index";

import "./App.css";

function App(props) {
  console.log(props.classes);
  // const classes = props.classes.results
  useEffect(() => {
    // this effect will only call an action creator, not make an API call
    props.fetchClasses();
  }, []);
  return (
    <div className="App">
      <h1>Choose Your Class</h1>
      {props.classes.map((item) => {
        return <h3>{item.name}</h3>;
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    classes: state.classes,
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, { fetchClasses })(App);
