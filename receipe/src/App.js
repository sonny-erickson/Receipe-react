import React, {Component} from 'react';
import './App.css';
import Form from "./components/Form";
import Recipe from "./components/Recipe";
//import Axios from "axios";

const API_ID="b6b2f1a9";
const API_KEY="60375dc6ca821f47b4bbf6fa612dc097";

class App extends Component {
  state={
    food:undefined,
    error:undefined
  }
  getRecipe = async (e)=>{
    e.preventDefault();
    const food = e.target.elements.recipeName.value
     const apiCall = await fetch(`https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await apiCall.json();
   
    if(food){
      if(data.hits.length === 0){
        this.setState({
          food: [],
          error:"No answer"
        })
      }else if(data.cod === 404){
        this.setState({
          food: [],
          error:"ERRO HAPPENDS"
        })
      }else{
        this.setState({
          food: data.hits,
          error:"GG"
        })
      }
    }else{
      this.setState({
        food: [],
        error:""
      })
    }
  }
  
  render(){

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        
          <Recipe food={this.state.food}/>
      </div>
  );
  }

}

export default App;
