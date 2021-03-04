
// const NewBusinessForm = ({ newBusinessFormData, updateNewBusinessForm, history, userId}) => {
//   const handleBusinessInfoInputChange = event => {
//     event.preventDefault();
//     const { name, value } = event.target
//     // console.log(name)
//     // console.log(value)
//     // const updatedFormInfo = {
//     //   ...newBusinessFormData,
//     //   [name]: value
//     // }
    
//     updateNewBusinessForm(name, value)
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
//       handleSubmit(newBusinessFormData, userId)
//     }}>
//         <input
//           name="name"
//           placeholder="Name"
//           onChange={handleBusinessInfoInputChange}
//           value={newBusinessFormData.name}
//         />
//         <br/>
//         <input
//           name="description"
//           placeholder="Description"
//           onChange={handleBusinessInfoInputChange}
//           value={newBusinessFormData.description}
//         />
//         <br/>
//         <input
//           name="open_hours"
//           placeholder="Open Hours"
//           onChange={handleBusinessInfoInputChange}
//           value={newBusinessFormData.open_hours}
//         />
//         <br/>
//         <input
//           name="email"
//           placeholder="Email"
//           onChange={handleBusinessInfoInputChange}
//           value={newBusinessFormData.email}
//         />
//         <br/>
//         <input
//           name="phone_number"
//           placeholder="Phone Number"
//           onChange={handleBusinessInfoInputChange}
//           value={newBusinessFormData.phone_number}
//         />
//         <br/>
//         <input
//           name="website"
//           placeholder="Website Link"
//           onChange={handleBusinessInfoInputChange}
//           value={newBusinessFormData.website}
//         />
//         <br/>
//         <input
//           name="category"
//           placeholder="Category"
//           onChange={handleBusinessInfoInputChange}
//           value={newBusinessFormData.category}
//         />
//         <br/>
//         <input
//           name="address1"
//           placeholder="Address Line 1"
//           onChange={handleBusinessInfoInputChange}
//           value={newBusinessFormData.address1}
//         />
//         <br/>
//         <input
//           name="city"
//           placeholder="City"
//           onChange={handleBusinessInfoInputChange}
//           value={newBusinessFormData.city}
//         />
//         <br/>
//         <input
//           name="state"
//           placeholder="State"
//           onChange={handleBusinessInfoInputChange}
//           value={newBusinessFormData.state}
//         />
//         <br/>
//         <input
//           name="postal_code"
//           placeholder="Postal Code"
//           onChange={handleBusinessInfoInputChange}
//           value={newBusinessFormData.postal_code}
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
//     newBusinessFormData: state.newBusinessForm,
//     userId
//   }
// }

// export default connect(mapStateToProps, { updateNewBusinessForm, resetNewBusinessForm, createBusiness } )(NewBusinessForm)
import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { updateNewBusinessForm, resetNewBusinessForm } from '../actions/newBusinessFormActions';
import { createBusiness } from '../actions/businessActions';
import {withRouter} from 'react-router-dom';
import { getCategories } from '../actions/categoryActions';
import { getCurrentUser } from '../actions/currentUserActions.js'

class NewBusinessForm extends Component {

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

export default withRouter(connect(null, { createBusiness })(NewBusinessForm))
