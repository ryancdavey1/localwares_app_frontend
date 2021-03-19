
// const BusinessForm = ({ BusinessFormData, updateBusinessForm, history, userId}) => {
//   const handleBusinessInfoInputChange = event => {
//     event.preventDefault();
//     const { name, value } = event.target
//     // console.log(name)
//     // console.log(value)
//     // const updatedFormInfo = {
//     //   ...BusinessFormData,
//     //   [name]: value
//     // }
    
//     updateBusinessForm(name, value)
//   }

//   const handleSubmit = (formData, userId) => {
//     createBusiness({
//       ...formData,
//       userId
//     }, history)
//   }

//   return (
//     <div>
//       <form onSubmit={event => {
//       event.preventDefault()
//       handleSubmit(BusinessFormData, userId)
//     }}>
//         <input
//           name="name"
//           placeholder="Name"
//           onChange={handleBusinessInfoInputChange}
//           value={BusinessFormData.name}
//         />
//         <br/>
//         <input
//           name="description"
//           placeholder="Description"
//           onChange={handleBusinessInfoInputChange}
//           value={BusinessFormData.description}
//         />
//         <br/>
//         <input
//           name="open_hours"
//           placeholder="Open Hours"
//           onChange={handleBusinessInfoInputChange}
//           value={BusinessFormData.open_hours}
//         />
//         <br/>
//         <input
//           name="email"
//           placeholder="Email"
//           onChange={handleBusinessInfoInputChange}
//           value={BusinessFormData.email}
//         />
//         <br/>
//         <input
//           name="phone_number"
//           placeholder="Phone Number"
//           onChange={handleBusinessInfoInputChange}
//           value={BusinessFormData.phone_number}
//         />
//         <br/>
//         <input
//           name="website"
//           placeholder="Website Link"
//           onChange={handleBusinessInfoInputChange}
//           value={BusinessFormData.website}
//         />
//         <br/>
//         <input
//           name="category"
//           placeholder="Category"
//           onChange={handleBusinessInfoInputChange}
//           value={BusinessFormData.category}
//         />
//         <br/>
//         <input
//           name="address1"
//           placeholder="Address Line 1"
//           onChange={handleBusinessInfoInputChange}
//           value={BusinessFormData.address1}
//         />
//         <br/>
//         <input
//           name="city"
//           placeholder="City"
//           onChange={handleBusinessInfoInputChange}
//           value={BusinessFormData.city}
//         />
//         <br/>
//         <input
//           name="state"
//           placeholder="State"
//           onChange={handleBusinessInfoInputChange}
//           value={BusinessFormData.state}
//         />
//         <br/>
//         <input
//           name="postal_code"
//           placeholder="Postal Code"
//           onChange={handleBusinessInfoInputChange}
//           value={BusinessFormData.postal_code}
//         />
//         <br/>
//         {/* <button onClick={handleItemButtonClick}>Add Item</button> */}
//         <input type="submit" value="Create Business"/>
//       </form>
//     </div>
//   )
// }

// const mapStateToProps = state => {
//   const userId = state.currentUser ? state.currentUser.id : ""
//   return {
//     BusinessFormData: state.BusinessForm,
//     userId
//   }
// }

// export default connect(mapStateToProps, { updateBusinessForm, resetBusinessForm, createBusiness } )(BusinessForm)
import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { updateBusinessForm, resetBusinessForm } from '../actions/BusinessFormActions';
import { createBusiness } from '../actions/businessActions';
import {withRouter} from 'react-router-dom';
import { getCategories } from '../actions/categoryActions';
import { getCurrentUser } from '../actions/currentUserActions.js'

class BusinessForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "",
      description: "",
      open_hours: "",
      email: "",
      phone_number: "",
      delivery: "",
      category: null,
      website: "",
      address1: "",
      city: "",
      state: "",
      postal_code: ""
    }
  }
  
  // componentDidMount() {
  //   this.renderCategories();
  // }

  handleSubmit(event) {
    event.preventDefault()
    
    this.props.createBusiness(this.state)
    
    this.setState({
      name: "",
      description: "",
      open_hours: "",
      email: "",
      phone_number: "",
      delivery: "",
      category_id: null,
      category: "",
      website: "",
      address1: "",
      city: "",
      state: "",
      postal_code: ""
    })
    this.props.history.push('/businesses')
  }

  handleChange(event){
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  handleCategoryChange(event){
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  renderCategories(){

    const allCategories = getCategories();
    console.log("ALL CATEGORIES", allCategories)
  const categoryElements = allCategories.map(category => {return <option value={category.id}>{category.name}</option>})

    return (
      <select 
          value={this.state.category} 
          onChange={this.handleCategoryChange} 
        >
        {categoryElements}
        </select>
    )
    
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          name="name"
          placeholder="Name"
          onChange={(event) => this.handleChange(event)}
          value={this.state.name}
        />
        <br/>
        <input
          name="description"
          placeholder="Description"
          onChange={(event) => this.handleChange(event)}
          value={this.state.description}
        />
        <br/>
        <input
          name="open_hours"
          placeholder="Open Hours"
          onChange={(event) => this.handleChange(event)}
          value={this.state.open_hours}
        />
        <br/>
        <input
          name="email"
          placeholder="Email"
          onChange={(event) => this.handleChange(event)}
          value={this.state.email}
        />
        <br/>
        <input
          name="phone_number"
          placeholder="Phone Number"
          onChange={(event) => this.handleChange(event)}
          value={this.state.phone_number}
        />
        <br/>
        <input
          name="website"
          placeholder="Website Link"
          onChange={(event) => this.handleChange(event)}
          value={this.state.website}
        />
        <br/>
        <input
          name="category"
          placeholder="Category"
          onChange={(event) => this.handleChange(event)}
          value={this.state.category}
        />
        {this.renderCategories}
        <br/>
        <input
          name="address1"
          placeholder="Address Line 1"
          onChange={(event) => this.handleChange(event)}
          value={this.state.address1}
        />
        <br/>
        <input
          name="city"
          placeholder="City"
          onChange={(event) => this.handleChange(event)}
          value={this.state.city}
        />
        <br/>
        <input
          name="state"
          placeholder="State"
          onChange={(event) => this.handleChange(event)}
          value={this.state.state}
        />
        <br/>
        <input
          name="postal_code"
          placeholder="Postal Code"
          onChange={(event) => this.handleChange(event)}
          value={this.state.postal_code}
        />
        <br/>
        {/* <button onClick={handleItemButtonClick}>Add Item</button> */}
        <input type="submit" value="Create Business"/>
      </form>
      </div>
    )
  }
} 

export default withRouter(connect(null, { createBusiness })(BusinessForm))



// import React from 'react';
// // 1.  VVV We first grab the action creator
// import { updateBusinessForm, resetBusinessForm } from '../actions/BusinessFormActions';
// import { createBusiness } from '../actions/businessActions';
// import { connect } from 'react-redux'


// // 3.  This means Redux gives us back a prop called updateTripForm
// // which when invoked, Redux will now dispatch
// const BusinessForm = ({ formData, updateBusinessForm, userId, business, handleSubmit, editMode }) => {

//   //const { name, startDate, endDate } = formData
//   console.log("FORM DATA", formData)

//   const handleChange = event => {
//     console.log("trigger Handle change")
//     const { name, value } = event.target
//     // 4.  This is not an invocation of just the action creator,
//     // it's now Redux dispatching the action built by the action
//     // creator with the appropriate arguments
//     updateBusinessForm(name, value)
//   }

//   return (
//     <form onSubmit={event => {
//       event.preventDefault()
//       handleSubmit(formData)
//     }}>
      // <input
      //     name="name"
      //     placeholder="Name"
      //     onChange={handleChange}
      //     value={formData.name}
      //   />
      //   <br/>
      //   <input
      //     name="description"
      //     placeholder="Description"
      //     onChange={handleChange}
      //     value={formData.description}
      //   />
      //   <br/>
      //   <input
      //     name="open_hours"
      //     placeholder="Open Hours"
      //     onChange={handleChange}
      //     value={formData.open_hours}
      //   />
      //   <br/>
      //   <input
      //     name="email"
      //     placeholder="Email"
      //     onChange={handleChange}
      //     value={formData.email}
      //   />
      //   <br/>
      //   <input
      //     name="phone_number"
      //     placeholder="Phone Number"
      //     onChange={handleChange}
      //     value={formData.phone_number}
      //   />
      //   <br/>
      //   <input
      //     name="website"
      //     placeholder="Website Link"
      //     onChange={handleChange}
      //     value={formData.website}
      //   />
      //   <br/>
      //   <input
      //     name="category"
      //     placeholder="Category"
      //     onChange={handleChange}
      //     value={formData.category}
      //   />
      //   {/* {this.renderCategories} */}
      //   <br/>
      //   <input
      //     name="address1"
      //     placeholder="Address Line 1"
      //     onChange={handleChange}
      //     value={formData.address1}
      //   />
      //   <br/>
      //   <input
      //     name="city"
      //     placeholder="City"
      //     onChange={handleChange}
      //     value={formData.city}
      //   />
      //   <br/>
      //   <input
      //     name="state"
      //     placeholder="State"
      //     onChange={handleChange}
      //     value={formData.state}
      //   />
      //   <br/>
      //   <input
      //     name="postal_code"
      //     placeholder="Postal Code"
      //     onChange={handleChange}
      //     value={formData.postal_code}
      //   />
//         <br/>
//         {/* <button onClick={handleItemButtonClick}>Add Item</button> */}
//         <input type="submit" value="Create Business"/>
//       {/* <input
//         type="submit"
//         value={editMode ? "Update Trip" : "Create Trip" }
//       /> */}
//     </form>
// )};

// const mapStateToProps = state => {
//   const userId = state.currentUser ? state.currentUser.id : ""
//   return {
//     formData: state.businessForm,
//     userId
//   }
// }

// // 2.  We pass the action creator to redux's connect function
// // using either mapDispatchToProps or the shorthand object syntax seen below.
// export default connect(mapStateToProps, { updateBusinessForm })(BusinessForm);