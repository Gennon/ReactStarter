"use strict";
var React = require('react');
var ReactDOM = require('react-dom');

class Main extends React.Component{
  render() {
    return (
    <h1 className="red">
      Hello!
    </h1>
    )
  }
};

ReactDOM.render(<Main />, document.querySelector('.container'));
