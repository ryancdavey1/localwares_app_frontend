import React from 'react';
import BusinessForm from './BusinessForm'
import { createBusiness } from '../actions/businessActions'
import { resetBusinessForm } from '../actions/businessFormActions'
import { connect } from 'react-redux'

const NewBusinessFormWrapper = ({ history, createBusiness }) => {

    //console.log(formData)
    resetBusinessForm();
  const handleSubmit = (formData, userId) => {
    
    createBusiness({
      ...formData,
      userId
    }, history)
  }
 return  <BusinessForm history={history} handleSubmit={handleSubmit} />
};

export default connect(null, { createBusiness })(NewBusinessFormWrapper);