import React from 'react'
import './RecipeCard.scss'

const RecipeCard = ({ recipe }) => {
    return (
        <>

            <div className="recipe-card">


                <figure>
                    <img src={`${recipe.strMealThumb}`} alt="" />
                </figure>

                <h2 className='title'>{recipe.strMeal}
                </h2>


            </div>
        </>
    )
}

export default RecipeCard
