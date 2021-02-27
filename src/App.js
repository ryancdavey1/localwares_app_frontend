import './App.css';
import React from 'react'; 
import {connect} from 'react-redux';
import { getCurrentUser } from './actions/currentUserActions.js'
import NavBar from './components/NavBar';
import MainContainer from './components/MainContainer';


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    // think about refactoring to navbar
    return (
      <div className="App">
        <NavBar />
        <MainContainer />
      </div>
      
    );
  }
}

export default connect(null, { getCurrentUser })(App);
