import React from 'react';
import BusinessForm from './BusinessForm'
import { updateBusiness, deleteBusiness } from '../actions/businessActions';
import { setFormDataForEdit, resetBusinessForm } from '../actions/businessFormActions';
import { connect } from 'react-redux'

class EditBusinessFormWrapper extends React.Component {
  componentDidMount(){
    this.props.business && this.props.setFormDataForEdit(this.props.business)
  }

  componentDidUpdate(prevProps) {
    this.props.business && !prevProps.business && this.props.setFormDataForEdit(this.props.business)
  }

  componentWillUnmount() {
    this.props.resetBusinessForm()
  }

  handleSubmit = (formData) => {
    console.log(this.props);
    //event.preventDefault();
    const { updateBusiness, business, history } = this.props
    updateBusiness({
      ...formData,
      businessId: business.id,
      //userId
    }, history)
  }

  render() {
    const { history, deleteBusiness, business } = this.props
    const businessId = business ? business.id : null
    return  <>
              <BusinessForm editMode handleSubmit={this.handleSubmit} />
              <br/>
              <button style={{color: "red"}} onClick={()=>deleteBusiness(businessId, history)}>Delete this business</button>
            </>
  }
};

export default connect(null, { updateBusiness, setFormDataForEdit, resetBusinessForm, deleteBusiness })(EditBusinessFormWrapper);