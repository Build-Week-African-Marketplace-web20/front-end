import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
feature/register-and-login
import Login from './Login';
import Register from './Register';

import Storefront from './components/Store/Storefront'
import {Route} from 'react-router-dom'


 main

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

    <div className="App">
      <header className="App-header">
        <p>Let's make an awesome app.</p>
        <p>By: TT_WEBPT_96</p>
      <Route path="/market">
        <Storefront />
      </Route>
      
      </header>
    </div>
  </>

  );
}

export default App;
