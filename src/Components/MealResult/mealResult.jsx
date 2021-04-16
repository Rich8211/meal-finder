import React from 'react'
import './mealResult.css'

function MealResult({mealThumb, mealStr, mealID, onClick}) {
    return (
        <div onClick={onClick} className="meal-result">
            <img src={mealThumb} alt={mealStr}/>
            <div className="meal-info" data-mealid={mealID}>
                <h3>{mealStr}</h3>
            </div>
        </div>
    )
}

export default MealResult
