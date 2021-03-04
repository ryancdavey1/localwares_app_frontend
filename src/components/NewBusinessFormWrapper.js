import React from 'react';
//import NewBusinessForm from './NewBusinessForm'
import { createBusiness } from '../actions/businessActions'
import { connect } from 'react-redux'

const NewBusinessFormWrapper = ({ history, createBusiness }) => {

  const handleSubmit = (formData, userId) => {
    createBusiness({
      ...formData,
      userId
    }, history)
  }
  //return  <NewBusinessForm />
};

export default connect(null, { createBusiness })(NewBusinessFormWrapper);