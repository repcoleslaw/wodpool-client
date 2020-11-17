import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import jwtDecode from 'jwt-decode';
import axios from 'axios';



//redux
import {Provider} from 'react-redux';
import store from './redux/store';
import AuthRoute from "./util/AuthRoute";
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getUserData} from './redux/actions/userActions';

//import pages
import about from './pages/about.js';
import home from './pages/home.js';
import login from './pages/login.js';
import signup from './pages/signup.js';
import splash from './pages/splash.js';


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



class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={splash} />
            <Route
              exact
              path="/login"
              component={login}            
            />
            <Route
              exact
              path="/signup"
              component={signup}             
            />
            <AuthRoute
              exact
              path="/home"
              component={home}
            />
            <AuthRoute
              exact
              path="/about"
              component={about}
            />
          </Switch>
        </Router>
      </Provider>
    );
  }
};

export default App;
