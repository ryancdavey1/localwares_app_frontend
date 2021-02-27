import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginFormActions';
import { login } from '../actions/currentUserActions';

const Login = ({ loginFormData, updateLoginForm, login}) => {

  const handleChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...loginFormData,
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault();
    login(loginFormData)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Email" type="text" name="email" value={loginFormData.email} onChange={handleChange}/>
      <input placeholder="Password" type="password" name="password" value={loginFormData.password} onChange={handleChange}/>
      <input type="submit" value="Log In" />
    </form>
  )
}

const mapStateToProps = state => {
  return {
    loginFormData: state.loginForm
  }
}

//const mapDispatchToProps 

export default connect(mapStateToProps, { updateLoginForm, login })(Login);