import React, {useState} from 'react'

//react-router-dom stuffs
import { Link } from 'react-router-dom';

//redux stuff
import {connect} from 'react-redux';
import { logoutUser } from '../redux/actions/userActions';

//antD stuff
import {Row} from 'antd';
import {Modal } from 'antd';


//import assets

import logo from '../assets/icon.png';



function Header(props, history) {


  const [modal, setModal] = useState(false);
  

  const handleModal = (e) => {
    setModal(true);
  };

  const handleModalClose = (e) => {
    setModal(false);
  };

  const handleClick = (e) => {
    console.log(props)
    console.log(history)
    props.logoutUser();
  }

  // style objects

  const navbar = {
    listStyle: "none",
    display: "inline-block",
    padding: "2em 4em",
    cursor: "pointer",
  };

  const navbarItem = {
    color: "white",
    fontSize: "14px",
    textAlign:"center",
    textTransform: "uppercase",
    fontFamily:'Roboto Condensed',
    fontWeight:"bold"
  };



  return (
    <Row >
      <Link to="/">
      <img src={logo} style={{ height: "2em", width: "auto", margin: "2em" }} alt="logo" />
      </Link>
      <div style={{justifyContent:"center"}}>

      <li style={navbar}><Link style={navbarItem} to="/home">HOME</Link></li>
      <li style={navbar}><Link style={navbarItem} to="/about">LOGIN</Link></li>

      </div>


    </Row>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
  ui: state.ui
});



export default connect(mapStateToProps, {logoutUser})(Header) 
