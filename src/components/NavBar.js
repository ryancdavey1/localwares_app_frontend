import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Logout from './Logout';
//import { getCurrentUser } from './actions/currentUserActions'

const NavBar = ({ currentUser }) => {
  
  return (
    <div className="NavBar">
      {currentUser ? <strong>Welcome, {currentUser.name}</strong> : ""}
      {currentUser ? <Logout/> : <Login/>}
    </div>
  )
}

const mapStateToProps = ({currentUser}) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(NavBar);