import React from 'react';
import { connect } from 'react-redux';
import { updateSignupForm, resetSignupForm } from '../actions/signupFormActions';
import { signup } from '../actions/currentUserActions';

const Signup = ({ signupFormData, updateSignupForm, signup }) => {

  const handleChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault();
    signup(signupFormData)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" type="text" name="name" value={signupFormData.name} onChange={handleChange}/>
      <input placeholder="Email" type="text" name="email" value={signupFormData.email} onChange={handleChange}/>
      <input placeholder="Password" type="password" name="password" value={signupFormData.password} onChange={handleChange}/>
      <input type="submit" value="Sign Up" />
    </form>
  )
}

const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignupForm, resetSignupForm, signup })(Signup);