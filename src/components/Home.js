import React from 'react';
import Login from './Login';
import Signup from './Signup';
import { Link } from 'react-router-dom';

 const Home = ({}) => {
  return (
    <div>
      Welcome to LocalWares, please <Link to="/login">Log In</Link> or <Link to="/signup">Sign Up</Link> <br></br>
      {/* {currentUser ? <Logout/> : <Login/>} */}
    </div>
  )
}

export default Home