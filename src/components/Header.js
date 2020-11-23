import React, {useState} from 'react'

//react-router-dom stuffs
import { Link } from 'react-router-dom';

//redux stuff
import {connect} from 'react-redux';
import { logoutUser } from '../redux/actions/userActions';

//antD stuff
import {Row, Col} from 'antd';
import {Modal } from 'antd';


//import assets

import logo from '../assets/BlackwordMark.svg';



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
    padding: "2em 2em 0 0",
    cursor: "pointer",
  };

  const navbarItem = {
    color: "black",
    fontSize: "18px",
    textTransform: "lowercase",
    fontFamily:'Rock Salt'
  };
  const navbarButton = {
    color: "black",
    fontSize: "18px",
    textTransform: "lowercase",
    fontFamily:'Rock Salt'
  };

  const colStyle = {
    padding: "2em",
  };
  return (
    <Row >
      <Col  xs={24} sm={8} style={colStyle}>
        <img src={logo} style={{height:"5em", width:"auto", margin:"0 2em"}}alt="logo"/>
      </Col>
      <Col xs={24} sm={16} style={colStyle}>
      <ul style={{display:"inline", lineHeight:"40px", padding:"2em"}}>
        <li style={navbar}><Link style={navbarItem} to="/home">Home</Link></li>
        <li style={navbar} onClick={handleModal}><Link to="/home" style={navbarItem}>Shop</Link></li>
        <li style={navbar}><Link style={navbarItem} to="/about">About</Link></li>
        <li style={navbar}><button style={navbarButton} onClick={handleClick}>Log Out</button></li>


        </ul>
      </Col>

        <Modal
        visible={modal}
        onCancel={handleModalClose}
        onOk={(e)=>setModal(false)}
        >
          <h1>Coming Soon!</h1>
        </Modal>

    </Row>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
  ui: state.ui
});



export default connect(mapStateToProps, {logoutUser})(Header) 
