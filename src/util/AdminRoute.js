import React from 'react'
import {Route, Redirect} from 'react-router-dom';
import { useSelector } from 'react-redux';







const AdminRoute = (props) => {
  const isAdmin = useSelector((state) => state);

  return (
    <Route
      
      render={(props) =>
        isAdmin === true ? <props.Component {...props} /> : <Redirect to="/home" />
      }
    />
  );
}; 




export default AdminRoute;