import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
// //import InboxIcon from '@material-ui/icons/Inbox';
// //import DraftsIcon from '@material-ui/icons/Drafts';
import { Link } from 'react-router-dom';
import BusinessCard from './BusinessCard'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

// function ListItemLink(props) {
//   return <ListItem button component="a" {...props} />;
// }

// const BusinessList = props => {
//   const classes = useStyles();
//   return (
//     <div className={classes.root}>
//       <Divider />
//       <List component="nav" aria-label="secondary mailbox folders">
//         {props.businesses.map(business => (<ListItem button> {business.attritbutes.name} </ListItem>))}
//       </List>
//       {/* {businesses.map(business => <p>{business.attributes}</p>)} */}
//     </div>
//   );
// }

// const mapStateToProps = state => {
//   return {
//     businesses: state.businesses
//   }
// }

// export default connect(mapStateToProps)(BusinessList);
//import React from 'react'
//import { connect } from 'react-redux'


const BusinessList = props => {
  const businessCards = props.businesses.length > 0 ?
    // props.businesses.map(t => (<p key={t.id}><Link to={`/businesses/${t.id}`}>{t.attributes.name}</Link></p>)) :
    // null
    props.businesses.map(b => (<BusinessCard key={b.id} business={b}/>)) :
    null

  return businessCards
}

const mapStateToProps = state => {
  return {
    businesses: state.businesses
  }
}

export default connect(mapStateToProps)(BusinessList)