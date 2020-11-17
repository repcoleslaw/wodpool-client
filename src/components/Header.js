import React, {useState} from 'react'

//react-router-dom stuffs
import { Link } from 'react-router-dom';

//antD stuff
import {Row, Col} from 'antd';
import {Modal } from 'antd';


//import assets

import logo from '../assets/WhiteWrdMark.svg';



function Header() {

  const [modal, setModal] = useState(false)

  const handleModal = (e) => {
    setModal(true);
}


const handleModalClose = (e) =>{
    setModal(false);
}

  const navStyle = {
    background: "#1A1A1A",
    boxShadow:"5px 5px 7px black"
  }
  const liStyle = {
    color:"black",
    listStyle:"none",
    display:"inline-block",
    padding:"0 2em 0 0",
    cursor:"pointer",
    
  }

  const colStyle={
    padding:"2em"
  }
  return (
    <Row style={navStyle}>
      <Col  xs={24} sm={8} style={colStyle}>
        <img src={logo} style={{height:"5em", width:"auto", margin:"0 2em"}}alt="logo"/>
      </Col>
      <Col xs={24} sm={16} style={colStyle}>
      <ul style={{display:"inline", lineHeight:"40px"}}>
        <li style={liStyle}><Link to="/home">Home</Link></li>
        <li style={liStyle}><Link to="/pools">Pools</Link></li>
        <li style={liStyle} onClick={handleModal}>Shop</li>
        <li style={liStyle}><Link to="/about">About</Link></li>


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

export {Header} 
