import './App.css';
import './form.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar'

import LoginForm from './components/Forms/LoginForm';
import RegisterForm from './components/Forms/RegisterForm';
import TempAddForm from './components/Forms/TempAddForm'

import Storefront from './components/Store/Storefront'
import Inventory from './components/OwnerView/Inventory'



function App() {


  return (
     <>
      <div className="App">
        <Route path="/" component={NavBar} />
        <header className="App-header">
          <Route exact path="/market" component = {Storefront}/>
          <Route path="/login" component={LoginForm}/>
          <Route path="/register" component={RegisterForm}/>

          <Route exact path='/inventory' component={Inventory}/>
          <Route path='/addItem' component={TempAddForm}/>
      
        </header> 

      </div>
    
</>
  );
}

export default App;
