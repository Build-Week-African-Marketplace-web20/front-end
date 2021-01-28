import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import Login from './Login';
import Register from './Register';

function App() {

  return (
    <>
    <NavBar />
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <div className="App">
        <header className="App-header">

        <p>Let's make an awesome app.</p>
        <p>By: TT_WEBPT_96</p>

        </header>
      </div>
    </Switch>
    </>
  );
}

export default App;
