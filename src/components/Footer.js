import React from 'react'
import { Row, Col } from "antd";

import { Link } from "react-router-dom";

function Footer() {

  const style = {
    left:"0",
    bottom:"0",
    width:"100%"
  }
  return (
    <Row style={style}>
      <Col xs={24} md={8}>
 

      </Col>
      <Col xs={24} md={14}>
      <h3>copyright </h3>
      <ul>
        <Link className="footerlink" to="/">Terms of Service</Link>
        <Link className="footerlink" to="/">Privacy Policy</Link>
        <Link className="footerlink" to="/">Team</Link>
      </ul>
      </Col>
    </Row>
  )
}

export  {Footer}
