import React from 'react';

const BusinessCard = ({ business }) => {
  return (
    <div>
      <p>{business.attributes.name}</p>
      <p>{business.attributes.description}</p>
      <p>Open Hours: {business.attributes.open_hours}</p>
      <p>Email: {business.attributes.email}</p>
      <p>Phone Number: {business.attributes.phone_number}</p>
      <p>Website: {business.attributes.website}</p>
      <p>Address: {business.attributes.address1}, {business.attributes.city}, {business.attributes.state}, {business.attributes.postal_code}</p>
    </div>
  )
}

export default BusinessCard