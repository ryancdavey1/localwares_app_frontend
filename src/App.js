import './App.css';
import React from 'react'; 
import Login from './components/Login';
import {connect} from 'react-redux';
import { getCurrentUser } from './actions/currentUserActions.js'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <Login/>
    );
  }
}

export default connect(null, { getCurrentUser })(App);
