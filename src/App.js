import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return(
     <div className="back">
       <img src={logo} alt="logo" />
        <h2>
          React Home study 
        </h2>
     </div> 
    );
  }
}

export default App;
