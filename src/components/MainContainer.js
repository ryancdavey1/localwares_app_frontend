import React, { PureComponent } from 'react'
import BusinessList from './BusinessList'
import BusinessForm from './BusinessForm'
import { Route, Switch } from 'react-router-dom'
import BusinessCard from './BusinessCard'
import {connect} from 'react-redux'
import {getBusinesses} from '../actions/businessActions'

class MainContainer extends PureComponent {


    componentDidMount(){
        this.props.getBusinesses()
    }


    render(){
        
        return (
            <>
                {/* <Switch>
                    <Route exact path="/businesses">
                        <BusinessList businesses={this.props.businesses}/>
                    </Route>
                    <Route exact path="/businesses/new">
                        <BusinessForm />
                    </Route>
                    <Route exact path="/businesses/:id" render={((routerProps) => <BusinessCard business={this.props.businesses.find(business => business.id === parseInt(routerProps.match.params.id))} /> ) }/>
                </Switch> */}

            </>
        )
    }
}

const mapStateToProps = ({ businesses }) => {
    return {
        businesses 
    }
}


export default connect(mapStateToProps, {getBusinesses})(MainContainer)