import React from 'react'
import {Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';



const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
  user: state.user
})

const AdminRoute = ({component: Component, authenticated, user, ...rest}) => {


 return(
   <Route
    {...rest}
  
    render= {(props) => user.isAdmin === true ? <Component {...props}/> : <Redirect to='/home'/> } />
 )
} 




export default connect(mapStateToProps)(AdminRoute);