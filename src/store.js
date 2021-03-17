import { createStore,  applyMiddleware, compose, combineReducers } from 'redux';
import usersReducer from './reducers/usersReducer';
import currentUserReducer from './reducers/currentUserReducer';
import loginFormReducer from './reducers/loginFormReducer';
import signupFormReducer from './reducers/signupFormReducer';
import businessesReducer from './reducers/businessesReducer';
import businessFormReducer from './reducers/businessFormReducer';
import categoriesReducer from './reducers/categoriesReducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  users: usersReducer,
  currentUser: currentUserReducer,
  loginForm: loginFormReducer,
  businesses: businessesReducer,
  signupForm: signupFormReducer,
  businessForm: businessFormReducer,
  categories: categoriesReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store;