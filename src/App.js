import HomePage from './Pages/Home'
import Cuisine from './Pages/Cuisine'
import SingleMeal from './Pages/SingleMeal'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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
          <Route path="/cuisine/:type">
            <Cuisine></Cuisine>
          </Route>
          <Route path="/filtered-meals">
            <Cuisine></Cuisine>
          </Route>
          <Route path={`/single-meal/:id`}>
            <SingleMeal></SingleMeal>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
