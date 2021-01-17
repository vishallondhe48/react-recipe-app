import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './FoodRecipe.scss'

const FoodRecipe = ({ match }) => {

    const url = match.params.id

    const [food, setFood] = useState()



    const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${url}`


    useEffect(async () => {
        const { data } = await axios.get(apiUrl)

        setFood(data.meals[0])
    }, [])



    return (
        <>

            <Link to='/' className='link-homepage'><i class="far fa-hand-point-left"></i>  Go to homepage</Link>
            <div className="food-details">
                {food ? <div className="food">
                    <div className="image-container">
                        <img src={food.strMealThumb} alt="" />
                        <h2>{food.strMeal}</h2>
                    </div>

                    <div className="wrapper container">

                        <p className='ingredients'><span className='heading'>ingredients:</span> <span className='text'> {food.strIngredient1}, {food.strIngredient2}, {food.strIngredient3}, {food.strIngredient4}, {food.strIngredient5}</span> </p>

                        <p className='instructions'><span className='heading'>instructions:</span> <span className='text'>{food.strInstructions}</span></p>
                    </div>
                </div> : 'please wait'}

            </div>



        </>
    )
}

export default FoodRecipe
