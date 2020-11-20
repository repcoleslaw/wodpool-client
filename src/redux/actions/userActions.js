import {SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_UNAUTHENTICATED, LOADING_USER} from '../types';
import axios from 'axios';

export const loginUser = (userData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post('/login', userData)
    .then((res) => {
      setAuthorizationHeader(res.data.token);       
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      history.replace("/home");
      console.log(history);
    })
    .catch((err) => {
      console.log(err)
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

  export const getUserData = () => (dispatch) => {
    dispatch({type: LOADING_USER});
    axios.get("/user")
      .then((res) => {
        dispatch({
          type: SET_USER,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  export const signupUser = (newUserData, history) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    dispatch({ type: CLEAR_ERRORS });
    axios.post("/signup", newUserData)
      .then((res) => {
        setAuthorizationHeader(res.data.token);        
        dispatch(getUserData());
        dispatch({ type: CLEAR_ERRORS });
        history.push("/home");
       
      })
      .catch((err) => {
        dispatch({
          type: SET_ERRORS,
          payload: err.response.data,
        });
      });
  }; 

  export const logoutUser = (history) => (dispatch) => {
    localStorage.removeItem('FBIdToken');
    delete axios.defaults.headers.common['Authorization'];
    dispatch({type: SET_UNAUTHENTICATED});
    // history.push("/login")
  }

  //helper function
  const setAuthorizationHeader = (token) => {
    const FBIdToken = `Bearer ${token}`;
    localStorage.setItem("FBIdToken", FBIdToken);
    axios.defaults.headers.common["Authorization"] = FBIdToken;
  };