import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import MenuBar from './components/MenuBar'
import CreateMovie from './components/CreateMovie'
import MoviesList from './components/MoviesList'
import CreateCalification from './components/CreateClasification'

function App() {
  return (
    <BrowserRouter>
      <MenuBar/>
      <div className="container p-4">
        <Route path="/" exact component={MoviesList} />
        <Route path="/editMovie/:id" component={CreateMovie} />
        <Route path="/movie" component={CreateMovie} />
        <Route path="/calif" component={CreateCalification} />
      </div>
    </BrowserRouter>
  );
}

export default App
