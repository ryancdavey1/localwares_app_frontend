import React from 'react';

const Item = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.item.name}</p><br/>
      <p>{props.item.description}</p><br/>
      <p>${parseFloat(String(props.item.price)).toFixed(2)}</p><br/>
    </div>
  )
}

export default Item