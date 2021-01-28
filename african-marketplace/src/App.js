import './App.css';
import NavBar from './components/NavBar'
import Storefront from './components/Store/Storefront'
import {Route} from 'react-router-dom'



function App() {


  return (
  <>
    <NavBar />
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
