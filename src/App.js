import { useState, useEffect } from 'react'
import './App.scss';
import axios from 'axios'
import Recipe from './components/Recipe'


function App() {


  return (
    <>


      <h2 className='app-title'>React recipe app</h2>
      <Recipe />


    </>
  );
}

export default App;
