import React from 'react'
import {Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';



const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated
})

const AuthRoute = ({component: Component, authenticated, ...rest}) => {
 return(
   <Route
    {...rest}
    render= {(props) => authenticated === true ? <Component {...props}/> : <Redirect to='/login'/> } />
 )
} 




export default connect(mapStateToProps)(AuthRoute);
