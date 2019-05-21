
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
// import { composeWithDevTools } from 'redux-devtools-extension'; must also add around middleware below
import thunk from 'redux-thunk';
import memoryReducer from './Reducers/memoryReducer.js';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'

const store = createStore(memoryReducer, applyMiddleware(thunk)); 
console.log(store.getState)

ReactDOM.render(
    <Provider store={store}>
    {' '}
      <Router>
         <Route path="/" component={ App }/>
      </Router>
    </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
