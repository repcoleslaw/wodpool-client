import React from "react";
import { Link } from "react-router-dom";

import { Row, Col, Button, Statistic } from "antd";


// import assets

import background from "../assets/splashbackground_test.png";
import whiteWordMark from "../assets/WordMark_Shadow.svg";
import Header from '../components/Header';

function splash() {


  const { Countdown } = Statistic;
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

  return (
    <>
    <div style={{zIndex:"-1", position:"absolute", top:'0', width:'100vw', height:'85vh', background: `url(${background})`}}/>

     <Header/>
     <Row style={{height:"74vh"}}>
       <Col style={{textAlign:"center", margin:"5em auto"}}>

            {/* <h1 style={{fontSize:"6em"}}>WODPOOL</h1> */}
            <img
            src={whiteWordMark}
            style={{
              maxWidth: "400px",
              width: "15vw",
              height: "auto",
              marginBottom: "1em",
            }}
            alt="wodpool-logo"
          ></img>
            
            <Countdown value={deadline} valueStyle={{color:"#ffffff", paddingBottom:"15px", fontSize:"4em", textShadow:"2px 2px 4px #000000"}}/>
            <Button block type="primary" style={{marginBottom:"1em", textTransform:"uppercase", fontFamily:"Roboto Condensed", letterSpacing:".25em"}}>
              <Link to="/signup">Sign up
              </Link>
            </Button>
            <Button block type="primary" style={{marginBottom:"1em", textTransform:"uppercase", fontFamily:"Roboto Condensed", letterSpacing:".25em"}}>
              <Link to="/login">Login
              </Link>
            </Button>

       </Col>
     </Row>

    </>
    
  );
}

export default splash;
