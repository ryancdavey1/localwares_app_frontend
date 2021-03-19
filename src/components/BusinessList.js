import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const BusinessList = props => {
  const businessCards = props.businesses.length > 0 ?
    props.businesses.map(business => (<Link to={`/businesses/${business.id}`} key={business.id}><li>{business.attributes.name}</li></Link>)) :
    null
  return businessCards
}

const mapStateToProps = state => {
  return {
    businesses: state.businesses
  }
}

export default connect(mapStateToProps)(BusinessList)