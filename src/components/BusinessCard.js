import React from 'react';

const BusinessCard = ({ business }) => {
  return (
    <p>{business.attributes.name}</p>
  )
}

export default BusinessCard