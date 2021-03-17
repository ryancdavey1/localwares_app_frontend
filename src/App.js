import './App.css';
import React from 'react'; 
import {connect} from 'react-redux';
import { getCurrentUser } from './actions/currentUserActions.js'
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup';
import Home from './components/Home'
import BusinessList from './components/BusinessList';
import BusinessCard from './components/BusinessCard';
import BusinessDetails from './components/BusinessDetails';
import NewBusinessForm from './components/NewBusinessForm';
import NewBusinessFormWrapper from './components/NewBusinessFormWrapper.js'
import NavBar from './components/NavBar';
import MainContainer from './components/MainContainer';
import { Route, Switch } from 'react-router-dom';
import { getCategories } from '../src/actions/categoryActions';


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser();
    //this.props.getCategories();
  }

  render() {
    
    const {loggedIn, businesses } = this.props
    console.log("This is loggedIn" + loggedIn)
    return (
      <div className="App">
        {loggedIn ? <NavBar /> : null}
        <Switch>
          
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/' render={(props) => loggedIn ? <BusinessList/> : <Home/>}/>
          <Route exact path='/businesses' component={BusinessList}/>
          {/* <Route exact path='/businesses/new' component={NewBusinessForm}/> */}
          <Route exact path='/businesses/new' component={NewBusinessFormWrapper}/>
          <Route exact path='/businesses/:id' render={props => {
              
              const business = businesses.find(business => business.id === props.match.params.id)
              //const category = categories.find(category => category.id === business.attributes.category_id)
              console.log(business)
              //sconsole.log(category)
              return <BusinessDetails business={business} {...props}/>
              //return <BusinessDetails businesses={businesses} {...props}/>

            }
          }/>
          {/* <Route exact path='/businesses/:id/edit' render={props => {
              
              const business = businesses.find(business => business.id === props.match.params.id)
              //const category = categories.find(category => category.id === business.attributes.category_id)
              console.log(business)
              //sconsole.log(category)
              return <NewBusinessForm business={business} {...props}/>
              //return <BusinessDetails businesses={businesses} {...props}/>

            }
          }/> */}
        </Switch>
        
        {/* <MainContainer /> */}
      </div>
      
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    businesses: state.businesses,
    categories: state.categories
  })
}

export default connect(mapStateToProps, { getCurrentUser, getCategories })(App);
