import React, { PureComponent } from 'react'
import BusinessList from './BusinessList'
import NewBusinessForm from './NewBusinessForm'
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
                <Switch>
                    <Route exact path="/businesses">
                        <BusinessList businesses={this.props.businesses}/>
                    </Route>
                    <Route exact path="/businesses/new">
                        <NewBusinessForm />
                    </Route>
                    <Route exact path="/businesses/:id" render={((routerProps) => <BusinessCard business={this.props.businesses.find(business => business.id === parseInt(routerProps.match.params.id))} /> ) }/>
                </Switch>
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