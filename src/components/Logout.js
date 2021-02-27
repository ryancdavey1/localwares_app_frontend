import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/currentUserActions';

const Logout = ({ logout }) => {

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   logout();
  // }
  return (
    <form onSubmit={logout}>
      <input type="submit" value="Log Out" />
    </form>
  )
}

export default connect(null, { logout })(Logout);