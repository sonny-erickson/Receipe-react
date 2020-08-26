import React from 'react';

const Recipe = (props) =>{
   
    const foods = props.food ;
    if (!props.food) {
        return "Tapez qqch dans la barre de recherche";
        }
      
        if (props.food.length === 0) {
        return "Aucun résultats pour votre recherche";
        }
        if(props.food.cod === 404){
            return "Aucun résultats pour votre recherche";
        }
   
    return(
        <div className="d-flex justify-content-center flex-wrap">
           
            {foods.map(item =>(
                <div key={item.recipe.calories} className="element  border p-5">
                    <h4 className="text-center">{item.recipe.label}</h4>
                    <img className="py-5" src={item.recipe.image} alt="cucina"></img>
                    <ol>
                        {item.recipe.ingredients.map(ingredient=>(
                            <li>{ingredient.text}</li>
                        ))}
                    </ol>
                    <p className="text-center">Calories: {Math.round(item.recipe.calories)}</p>
                    <a className="text-center"href={item.recipe.url}>{item.recipe.url}</a>
                </div>
            ))}
        </div>
    )
}
export default Recipe;