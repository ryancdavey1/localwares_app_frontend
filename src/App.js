import './App.css';
import React from 'react'; 
import {connect} from 'react-redux';
import { getCurrentUser } from './actions/currentUserActions.js'
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup';
import Home from './components/Home'
import BusinessList from './components/BusinessList';
import NewBusinessForm from './components/NewBusinessForm';
import NewBusinessFormWrapper from './components/NewBusinessFormWrapper.js'
import NavBar from './components/NavBar';
import MainContainer from './components/MainContainer';
import { Route, Switch } from 'react-router-dom';
//import { getCategories } from '../actions/categoryActions';


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    
    const {loggedIn } = this.props
    console.log("This is loggedIn" + loggedIn)
    return (
      <div className="App">
        {loggedIn ? <NavBar /> : null}
        <Switch>
          
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/' render={(props) => loggedIn ? <BusinessList/> : <Home/>}/>
          <Route exact path='/businesses' component={MainContainer}/>
          <Route exact path='/businesses/new' component={NewBusinessForm}/>
        </Switch>
        
        {/* <MainContainer /> */}
      </div>
      
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}

export default connect(mapStateToProps, { getCurrentUser })(App);
