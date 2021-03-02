import './App.css';
import React from 'react'; 
import {connect} from 'react-redux';
import { getCurrentUser } from './actions/currentUserActions.js'
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup';
import BusinessList from './components/BusinessList';
import NavBar from './components/NavBar';
import MainContainer from './components/MainContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    // think about refactoring to navbar
    return (
      <div className="App">
        <NavBar />
        
        <Route exact path='/signup' component={Signup}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/businesses' component={BusinessList}/>
          <Route />
        
        {/* <MainContainer /> */}
      </div>
      
    );
  }
}

export default connect(null, { getCurrentUser })(App);
