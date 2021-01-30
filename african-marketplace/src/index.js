//libraries
import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import {logger} from 'redux-logger'
import thunk from 'redux-thunk'
import {BrowserRouter as Router} from 'react-router-dom'
//imports
import {initialReducer} from './redux/reducers/initialReducer'
//components
import App from './App';

//styles
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(initialReducer, applyMiddleware(thunk, logger))


ReactDOM.render(<>
<Provider store ={store}>
  <Router>
    <App />
  </Router>
 </Provider>
</>
,
  document.getElementById('root')
);

