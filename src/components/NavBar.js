import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Logout from './Logout';
//import { getCurrentUser } from './actions/currentUserActions'
import { NavLink } from 'react-router-dom';

const NavBar = ({ currentUser, loggedIn }) => {
  
  return (
    <div className="NavBar">
      {currentUser ? <p><strong>Welcome, {currentUser.attributes.name}</strong> Logged in as: {currentUser.attributes.email}</p> : ""}
      <NavLink className="active" to="/"> Home  |  </NavLink>
      <NavLink className="active" to="/businesses"> All Businesses  |  </NavLink>
      <NavLink className="active" to="/businesses/new">Add Business  |  </NavLink>
      {loggedIn ? <Logout/> : null}
      
    </div>
  )
}

const mapStateToProps = ({currentUser}) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(NavBar);