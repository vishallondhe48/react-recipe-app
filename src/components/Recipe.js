import React, { useState, useEffect } from 'react'
import './Recipe.scss'

import RecipeCard from './RecipeCard'
import axios from 'axios'

const Recipe = () => {


    const [food, setFood] = useState([])

    const [search, setSearch] = useState('')

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`

    useEffect(() => {
        getRecipes()
    }, [search])


    const getRecipes = async () => {
        const { data } = await axios.get(url)
        setFood(data.meals)
    }

    return (
        <>
            <input type="text" onChange={e => setSearch(e.target.value)} />

            <div className='recipe-cards container'>
                {food.map(recipe => (

                    <RecipeCard key={recipe.idMeal} recipe={recipe} />


                ))}
            </div>
        </>
    )
}

export default Recipe
