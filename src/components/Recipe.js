import React, { useState, useEffect } from 'react'
import './Recipe.scss'

import RecipeCard from './RecipeCard'
import axios from 'axios'

const Recipe = () => {


    const [food, setFood] = useState([])

    const [search, setSearch] = useState('')

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`


    useEffect(() => {
        let mounted = true

        const loadData = async () => {
            const { data } = await axios.get(url)
            if (mounted) {
                setFood(data.meals)
            }
        }
        loadData()
        return () => {
            mounted = false
        }
    }, [search])



    return (
        <>
            <input type="text" onChange={e => setSearch(e.target.value)} />


            {console.log(food)}
            {food ? <div className='recipe-cards container'>
                {food.map(recipe => (
                    <RecipeCard key={recipe.idMeal} recipe={recipe} />
                ))}
            </div> :
                'please type the correct food name'}
        </>
    )
}

export default Recipe
