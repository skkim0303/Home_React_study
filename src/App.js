import React, {Component} from "react";
import Customer from "./components/Customer.js"
import './App.css';


const customer = [{
  "id" : "1",
  "image" : "https://placeimg.com/80/80/1",
  "name" : "박관순",
  "birth" : "123456",
  "gender" : "남자",
  "job" : "축구선수"
},
{
  "id" : "2",
  "image" : "https://placeimg.com/80/80/2",
  "name" : "김남규",
  "birth" : "789016",
  "gender" : "남자",
  "job" : "요리사"
},
{
  "id" : "3",
  "image" : "https://placeimg.com/80/80/3",
  "name" : "오소리",
  "birth" : "567388",
  "gender" : "여자",
  "job" : "경찰"
}
]

class App extends Component {
  render() {
    return(
      <div>
        {
          customer.map(c=>{
            return (
              <Customer 
                key={c.id}  
                id={c.id}
                image={c.image}
                name={c.name}
                birth={c.borth}
                gender={c.gender}
                job={c.birth}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
