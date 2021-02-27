import './App.css';
import React from 'react'; 
import Login from './components/Login';
import Logout from './components/Logout';
import {connect} from 'react-redux';
import { getCurrentUser } from './actions/currentUserActions.js'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    // think about refactoring to navbar
    return (
      this.props.currentUser ? <Logout/> : <Login/>
    );
  }
}

const mapStateToProps = ({currentUser}) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);
