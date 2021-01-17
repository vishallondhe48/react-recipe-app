import React from 'react'
import './RecipeCard.scss'
import { Link } from 'react-router-dom'

const RecipeCard = ({ recipe }) => {
    return (
        <>
            <Link to={`/${recipe.idMeal}`} className='links'>
                <div className="recipe-card">
                    <figure>
                        <img src={`${recipe.strMealThumb}`} alt="" />
                    </figure>
                    <h2 className='title'>{recipe.strMeal}
                    </h2>

                </div>
            </Link>
        </>
    )
}

export default RecipeCard
