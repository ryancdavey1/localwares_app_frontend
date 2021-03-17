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
import React from 'react';
import { updateBusinessForm } from '../actions/businessFormActions';
import { connect } from 'react-redux';
//
const BusinessForm = ({formData, updateBusinessForm, userId, handleSubmit, business}) => {
  console.log("form data", formData)
  const handleChange = (event) => {
    //event.preventDefault();
    console.log(event.target);
    const { name, value, id} = event.target;
    if (name === "category_id") {
      let newId = parseInt(id);
      console.log(name, newId)
      updateBusinessForm(name, newId)
    } else {
      console.log(name, value);
      updateBusinessForm(name, value);
    }
  }

  // const handleSubmit = event => {
  //   event.preventDefault();
  // }

  return (
    <form onSubmit={event => {
      event.preventDefault()
      handleSubmit(formData)
    }}>
      <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={formData.name}
      />
        <br/>
        <input
          name="description"
          placeholder="Description"
          onChange={handleChange}
          value={formData.description}
        />
        <br/>
        <input
          name="open_hours"
          placeholder="Open Hours"
          onChange={handleChange}
          value={formData.open_hours}
        />
        <br/>
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
        />
        <br/>
        <input
          name="phone_number"
          placeholder="Phone Number"
          onChange={handleChange}
          value={formData.phone_number}
        />
        <br/>
        <input
          name="website"
          placeholder="Website Link"
          onChange={handleChange}
          value={formData.website}
        />
        <br/>
        <div>
          <input type="radio" id={"1"} onChange={handleChange} checked={formData.category_id === 1} value="Coffee/Tea" name="category_id" /> Coffee/Tea
          <input type="radio" id={"2"} onChange={handleChange} checked={formData.category_id === 2} value="Restaurant/Eatery" name="category_id" /> Restaurant/Eatery
          <input type="radio" id={"3"} onChange={handleChange} checked={formData.category_id === 3} value="Bakery/Dessert" name="category_id" /> Bakery/Dessert
          <input type="radio" id={"4"} onChange={handleChange} checked={formData.category_id === 4} value="Grocery" name="category_id" /> Grocery
          <input type="radio" id={"5"} onChange={handleChange} checked={formData.category_id === 5} value="Event/Venue" name="category_id" /> Event/Venue
          <input type="radio" id={"6"} onChange={handleChange} checked={formData.category_id === 6} value="Tech/Electronic" name="category_id" /> Tech/Electronic
          <input type="radio" id={"7"} onChange={handleChange} checked={formData.category_id === 7} value="Music" name="category_id" /> Music
          <input type="radio" id={"8"} onChange={handleChange} checked={formData.category_id === 8} value="Financial" name="category_id" /> Financial
          <input type="radio" id={"9"} onChange={handleChange} checked={formData.category_id === 9} value="Exercise/Gym" name="category_id" /> Exercise/Gym
          <input type="radio" id={"10"} onChange={handleChange} checked={formData.category_id === 10}  value="Brewery/Pub" name="category_id" /> Brewery/Pub
          <input type="radio" id={"11"} onChange={handleChange} checked={formData.category_id === 11}  value="Bookshop" name="category_id" /> Bookshop
          <input type="radio" id={"12"} onChange={handleChange} checked={formData.category_id === 12}  value="Clothes/Accessories" name="category_id" /> Clothes/Accessories
          <input type="radio" id={"13"} onChange={handleChange} checked={formData.category_id === 13}  value="Furniture/Supply" name="category_id" /> Furniture/Supply
          <input type="radio" id={"14"} onChange={handleChange} checked={formData.category_id === 14}  value="Architecture/Interior Design" name="category_id" /> Architecture/Interior Design
          <input type="radio" id={"15"} onChange={handleChange} checked={formData.category_id === 15}  value="Health/Medical" name="category_id" /> Health/Medical
          <input type="radio" id={"16"} onChange={handleChange} checked={formData.category_id === 16}  value="Sports" name="category_id" /> Sports
          <input type="radio" id={"17"} onChange={handleChange} checked={formData.category_id === 17}  value="Nature" name="category_id" /> Nature
          <input type="radio" id={"18"} onChange={handleChange} checked={formData.category_id === 18}  value="Movies" name="category_id" /> Movies
        </div>
        
        <br/>
        <input
          name="address1"
          placeholder="Address Line 1"
          onChange={handleChange}
          value={formData.address1}
        />
        <br/>
        <input
          name="city"
          placeholder="City"
          onChange={handleChange}
          value={formData.city}
        />
        <br/>
        <input
          name="state"
          placeholder="State"
          onChange={handleChange}
          value={formData.state}
        />
        <br/>
        <input
          name="postal_code"
          placeholder="Postal Code"
          onChange={handleChange}
          value={formData.postal_code}
        />
        <br/>
        <input type="submit" value="Create Business" />
    </form>
  )
};

const mapStateToProps = state => {
  const userId = state.currentUser ? state.currentUser.id : ""
  return {
    formData: state.businessForm,
    userId
  }
}


export default connect(mapStateToProps, { updateBusinessForm })(BusinessForm);