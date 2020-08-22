import React, {Component} from 'react';
import './App.css';
import Form from "./components/Form";
import Axios from "axios";

class App extends Component {
  
  getRecipe=(e)=>{
    const recipeName= e.target.elements.recipeName.value
    e.preventDefault()
    console.log(recipeName);
  }
  render(){
    const API_ID="b6b2f1a9";
    const API_KEY="60375dc6ca821f47b4bbf6fa612dc097";
    const url = `https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}`;
    const getData = async() =>{
      const result= await Axios.get(url);
      console.log(result);
    }

    return (
      <div className="App">
      <header className="App-header">
        <h1 className="App-title" onClick={getData}>Recipe Search</h1>
      </header>
      <Form getRecipe={this.getRecipe}/>
    </div>
  );
  }
  
}

export default App;
