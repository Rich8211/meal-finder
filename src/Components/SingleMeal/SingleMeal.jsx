import React, { useState, useEffect } from 'react'
import './SingleMeal.css'

const SingleMeal = ({meal}) => {

    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        let ingredientList = [];
        for (let i = 1; i <= 20; i++) {
            if (meal[`strIngredient${i}`]) {
                ingredientList.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
            } else {
                break;
            }
        }
        setIngredients(ingredientList);
    },[])

    return (
        <div className="single-meal">
            <h1>{meal.strMeal}</h1>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <div className="single-meal-info">
                {meal.strCategory && <p>{meal.strCategory}</p>}
                {meal.strArea && <p>{meal.strArea}</p>}
            </div>
            <div className="main">
                <p>{meal.strInstructions}</p>
                <h2>Ingredients</h2>
                <ul>
                    {ingredients.map(ingredient => <li>{ingredient}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default SingleMeal
