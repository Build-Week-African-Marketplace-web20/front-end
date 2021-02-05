import './App.css';
import './form.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar'

import LoginForm from './components/Forms/LoginForm';
import RegisterForm from './components/Forms/RegisterForm';
import TempAddForm from './components/Forms/TempAddForm'

import PrivateRoute from './components/PrivateRoute'
import Storefront from './components/Store/Storefront'
import Inventory from './components/OwnerView/Inventory'
import LandingPage from './components/LandingPage'


function App() {


  return (
     <>
      <div className="App">
        <Route path="/" component={NavBar} />
        {/* <header className="App-header"> */}
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/market" component ={Storefront}/>
          <Route path="/login" component={LoginForm}/>
          <Route path="/register" component={RegisterForm}/>

          <PrivateRoute exact path='/inventory' component={Inventory}/>
          <Route path='/addItem' component={TempAddForm}/>
      
        {/* </header>  */}

      </div>
    
</>
  );
}

export default App;
