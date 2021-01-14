import React from 'react'
import './RecipeCard.scss'

const RecipeCard = ({ recipe }) => {
    return (
        <>
            <div className="recipe-card">

                <img src={`${recipe.strMealThumb}`} width={350} alt="" />
                <h2 className='title'>{recipe.strMeal}</h2>
            </div>
        </>
    )
}

export default RecipeCard
