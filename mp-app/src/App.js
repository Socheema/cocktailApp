import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import SingleCocktail from './pages/SingleCocktail'

import Navbar from './Component/Navbar'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route  path='/about' element={<About />} />
          <Route  path='*' element={<Error />} />
          <Route  path='/cocktail/:id' element={<SingleCocktail />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
