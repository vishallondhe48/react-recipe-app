import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const FoodRecipe = ({ match }) => {

    const url = match.params.id

    const [food, setFood] = useState()

    const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${url}`
    useEffect(async () => {
        const { data } = await axios.get(apiUrl)

        setFood(data.meals[0])

    }, [url])
    return (
        <>
            <Link to='/'>Go to homepage</Link>
            <div className="food-details">
                {food ? <h2>{food.strMeal}</h2> : 'please wait'}

            </div>

        </>
    )
}

export default FoodRecipe
