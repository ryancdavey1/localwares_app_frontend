import React from 'react';
import Item from './Item';
import { connect } from 'react-redux';

const ItemDetail = ({items}) => {
  console.log("ITEM PROPS", items);
  const itemCards = []
  items.map(item => {
    itemCards.push(<Item item={item} />);
  }) 
    console.log("ITEM CARDS", itemCards);
  return itemCards
}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}


export default connect(mapStateToProps)(ItemDetail)

