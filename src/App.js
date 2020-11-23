import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import { createBrowserHistory } from "history";
import './App.css';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

//redux
import {Provider} from 'react-redux';
import store from './redux/store';
import {logoutUser, getUserData} from './redux/actions/userActions';
import {SET_AUTHENTICATED} from './redux/types';


import AuthRoute from "./util/AuthRoute";
import AdminRoute from "./util/AdminRoute";
// import PrivateRoute from './util/PrivateRoute';

//import pages
import splash from './pages/splash.js';
import about from './pages/about.js';
import login from './pages/login.js';
import home from './pages/home.js';
import board from './pages/board.js';
import admin from './pages/admin.js';



axios.defaults.baseURL = "https://us-central1-wodpool.cloudfunctions.net/api"

const token = localStorage.FBIdToken;

if(token){
  const decodedToken = jwtDecode(token);
  if(decodedToken.exp * 1000 < Date.now()){
    store.dispatch(logoutUser())
    window.location.href='/login';
  } else { 
      store.dispatch({type: SET_AUTHENTICATED});
      axios.defaults.headers.common['Authorization'] = token;
      store.dispatch(getUserData());
   }
}

// const history = createBrowserHistory(); 

class App extends Component {



  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={splash} />
            <Route exact path="/login" component={login} />

            {/* AuthRoutes Need to check for authenticated boolean */}
            <Route exact path="/home" component={home} />
            <Route exact path="/about" component={about} />

            {/* AdminRoutes need to check for isAdmin toggle && authenticated */}
            <AdminRoute exact path="/admin" component={admin}/>

            {/* PaidRoutes need to check for authenticated and paid boolean */}
            <Route exact path="/pools/:poolID" component={board} />
            
          </Switch>
        </Router>
      </Provider>
    );
  }
};

export default App;
