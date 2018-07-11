import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers'
import { composeWithDevTools } from  'redux-devtools-extension'
import route from './routes/index'
import { refreshSession } from './actions/index'

// Styles
import 'semantic-ui-css/semantic.min.css';
// Routes
import App from './routes'

const middlewares = [reduxThunk, logger]
const enhancers = applyMiddleware(...middlewares)
const store = createStore(rootReducer, composeWithDevTools(enhancers)
)

if(localStorage.user){
  store.dispatch(refreshSession({}))
}

ReactDOM.render(
<BrowserRouter>
  <Provider store={store}>
    <Route component={App} />
  </Provider>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
