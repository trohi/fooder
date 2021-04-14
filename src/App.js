import HomePage from './Pages/Home'
import NavMenu from './Components/Navbar'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavMenu></NavMenu>
      </header>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
