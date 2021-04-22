import HomePage from './Pages/Home'
import Cuisine from './Pages/Cuisine'
import SingleMeal from './Pages/SingleMeal'
import NavMenu from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css';

function App() {
  /* 
  useEffect(()=>{
    fetch('https://api.spoonacular.com/recipes/complexSearch?cuisine=Italian&apiKey=28087beca5d243b28544ddf2484ea4ac')
    .then(res=>{
      const data = res.json()
      return data
    })
    .then(data =>{
      console.log(data.results)
    })
  }) */

  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route path="/cuisine">
            <Cuisine></Cuisine>
          </Route>
          <Route path="/signle-meal">
            <SingleMeal></SingleMeal>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
