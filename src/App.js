import { useState, useEffect } from 'react'
import './App.scss';
import axios from 'axios'
import Recipe from './components/Recipe'


function App() {


  return (
    <>

      <div className="wrapper">
        <h2 className='app-title'>React recipe app</h2>
        <Recipe />

      </div>
    </>
  );
}

export default App;
