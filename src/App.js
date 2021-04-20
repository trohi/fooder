import HomePage from './Pages/Home'
import Cuisine from './Pages/Cuisine'
import NavMenu from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import './App.css';

function App() {
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
