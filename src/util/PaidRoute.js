import React from 'react'
import {Route, Redirect} from 'react-router-dom';

import {useSelector} from 'react-redux';



const PaidRoute = (props) => {

  const hasPaid = useSelector((state) => state.user);

  return (
    <Route
      
      render={(props) =>
        hasPaid === true ? <props.Component {...props} /> : <Redirect to="/home" />
      }
    />
  );
}; 


export default (PaidRoute);