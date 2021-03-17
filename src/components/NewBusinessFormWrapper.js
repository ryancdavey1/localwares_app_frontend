import React from 'react';
import NewBusinessForm from './NewBusinessForm'
import { createBusiness } from '../actions/businessActions'
import { connect } from 'react-redux'

const NewBusinessFormWrapper = ({ history, createBusiness }) => {

    //console.log(formData)

  const handleSubmit = (formData, userId) => {
    
    createBusiness({
      ...formData,
      userId
    }, history)
  }
 return  <NewBusinessForm history={history} handleSubmit={handleSubmit} />
  return <div>test</div>
};

export default connect(null, { createBusiness })(NewBusinessFormWrapper);