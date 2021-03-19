import React from 'react'
import {Link} from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getCurrentUser } from '../actions/currentUserActions';
import {connect} from 'react-redux';


const BusinessDetails = ({business, currentUser}) => {
    console.log(business);
    console.log("CURRENT USER", currentUser)
  //let items = props.business.attributes.items;
  //console.log("BUSINESS", business);
  //console.log("ITEMS:", business.attributes.items);
  return (
    business ?
      <div>
        <h3>{business.attributes.name}</h3>
        <p>{business.attributes.description}</p>
        {business.attributes.open_hours ? <p>Open Hours: {business.attributes.open_hours}</p> : null }
        {business.attributes.email ? <p>Email: {business.attributes.email}</p> : null}
        {business.attributes.phone_number ? <p>Phone Number: {business.attributes.phone_number}</p> : null}
        {business.attributes.website ? <p>Website: {business.attributes.website}</p> : null}
        <p>Address: {business.attributes.address1}, {business.attributes.city}, {business.attributes.state}, {business.attributes.postal_code}</p>
        {parseInt(currentUser.id) === business.attributes.user_id ? <Link to={`/businesses/${business.id}/edit`}>Edit this business</Link> : null}
        {business.attributes.items === [] ? null : <h4>Items:</h4>}
        {business.attributes.items.map(item => <div><p>{item.name} | ${parseFloat(String(item.price)).toFixed(2)}</p><p>{item.description}</p><br/><br/></div>)}
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