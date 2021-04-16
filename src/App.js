import React, {useState} from 'react'
import MealResult from './Components/MealResult/mealResult';
import SingleMeal from './Components/SingleMeal/SingleMeal';

import './App.css';

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [mealResults, setMealResults] = useState([]);
  const [singleMeal, setSingleMeal] = useState('')

  const handleSearch = (e) => {
    e.preventDefault();
    setSingleMeal('')
    if (searchTerm.trim()) {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        .then(res => res.json())
        .then(data => setMealResults(data.meals));
    }

  }

  const getMealByID = (id) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => setSingleMeal(data.meals[0]))
  } 

  return (
    <div className="App">
      <h1>Meal Finder</h1>
      <div className="flex">
        <form action="" className="flex" id="submit">
          <input 
            name="search" 
            value={searchTerm} 
            onChange = {e => setSearchTerm(e.target.value)} 
            type="text" 
            id="search" 
            placeholder="Search for meals or keywords"/>
          <button onClick={handleSearch} className="search-btn" type="submit">
              <i className="fas fa-search"></i>
          </button>
        </form>
        <button className="random-btn" id="random">
          <i className="fas fa-random"></i>
        </button>
      </div>
      <div id="result-heading">
        {mealResults.length > 0 && 
        <h2>Search results for '{`${searchTerm}`}':</h2>
        }
      </div>
      <div className="meals" id="meals">
        {mealResults.length > 0 &&  mealResults.map((meal,i) => 
        <MealResult 
          onClick={() => getMealByID(meal.idMeal)}
          key = {i}
          mealThumb={meal.strMealThumb} 
          mealStr={meal.strMeal} 
          mealID={meal.idMeal}
          />)}
      </div>
      {singleMeal && <SingleMeal meal={singleMeal}/>}
    </div>
  );
}

export default App;
