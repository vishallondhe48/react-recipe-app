import React from 'react'
import './RecipeCard.scss'
import { Link } from 'react-router-dom'

const RecipeCard = ({ recipe }) => {
    return (
        <>
            <div className="recipe-card">
                <figure>
                    <img src={`${recipe.strMealThumb}`} alt="" />
                </figure>
                <h2 className='title'>{recipe.strMeal}
                </h2>
                <Link to={`/${recipe.idMeal}`}>view recipe</Link>
            </div>
        </>
    )
}

export default RecipeCard
