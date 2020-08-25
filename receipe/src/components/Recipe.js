import React from 'react';

const Recipe = (props) =>{
   
    const foods = props.food ;
    console.log(foods);
    return(
        <div>
            
            <p>Calories</p>
            <img src="" alt=""></img>
            {/* {{props.food.map(f => (
                <div>
                    <h1>{f.recipe.label}</h1>
                    
                </div>
            
            
          ))} } */}
        </div>
    )
}
export default Recipe;