import React from 'react'
import {Link} from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getCurrentUser } from '../actions/currentUserActions';
import {connect} from 'react-redux';


const BusinessDetails = ({business, currentUser}) => {
    //console.log(props.business.attributes);
  //let items = props.business.attributes.items;
  console.log("BUSINESS", business);
  console.log("ITEMS:", business.attributes.items);
  return (
    business ?
      <div>
        <h3>{business.attributes.name}</h3>
        <p>{business.attributes.description}</p>
        <p>Open Hours: {business.attributes.open_hours}</p>
        <p>Email: {business.attributes.email}</p>
        <p>Phone Number: {business.attributes.phone_number}</p>
        <p>Website: {business.attributes.website}</p>
        <p>Address: {business.attributes.address1}, {business.attributes.city}, {business.attributes.state}, {business.attributes.postal_code}</p>
        <Link to={`/trips/${business.id}/edit`}>Edit this business</Link>
        <h4>Items:</h4>
        {business.attributes.items.map(item => <div><p>{item.name}</p><br/><p>{item.description}</p><br/><p>${parseFloat(String(item.price)).toFixed(2)}</p><br/></div>)}
      </div> :
      <p>This the the business page with no details!</p>
  )
}

const mapStateToProps = state => {
  return ({
    currentUser: state.currentUser,
  })
}


export default connect(mapStateToProps, { getCurrentUser})(BusinessDetails)