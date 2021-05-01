import React, {Component} from "react";
import Customer from "./components/Customer.js"
import './App.css';


const customer = {
  "name" : "박관순",
  "birth" : "123456",
  "gender" : "남자",
  "job" : "축구선수"
}

class App extends Component {
  render() {
    return(
     <Customer 
        name={customer.name}
        birth={customer.birth}
        gender={customer.gender}
        job={customer.job}
     />
    );
  }
}

export default App;
