import { useState, useEffect } from 'react'
import './App.scss';
import axios from 'axios'
import FoodRecipe from './components/FoodRecipe'
import Recipe from './components/Recipe'

import { Route, BrowserRouter as Router } from 'react-router-dom'


function App() {


  return (
    <>
      <h2 className='logo'>React-recipe-app</h2>
      <Router>
        <Route path='/' exact component={Recipe} />
        <Route path='/:id' component={FoodRecipe} />

      </Router>

    </>
  );
}

export default App;
