import React, { Component } from "react";
import axios from "axios";

// import {connect} from 'react-redux';



import { Row, Col} from "antd";
import { Button } from "antd";

import Header from "../components/Header";
import TableBoard from "../components/TableBoard";
import Workouts from "../components/Workouts";

class board extends Component {
  state = {
    pool: null,
    board: null,
  };

  componentDidMount() {
    const path = this.props.location.pathname;
    axios
      .get(path)
      .then((res) => {
        this.setState({
          pool: res.data,
        });
      })
      .catch((err) => console.log(err));



    // axios.get("/pools/GJHa7F8hqktXLZc6jn2D/board")
    // .then((res) => {
    //   this.setState({
    //     board: res.data
    //   });   
    // })
    //  .catch((err)=>console.log(err)); 
  }

 
  render() {

    const colPoolStyle = {
      padding: "4em",
      margin: "0 auto",
      background: "rgba(0,0,0,0.25)",
      boxShadow: "5px 5px 8px #1A1A1A",
    };
     

    let poolMarkup = this.state.pool ? (
      <div>
        <h1>{this.state.pool.title}</h1>
        <p>{this.state.pool.desc}</p>
        <hr />
        <TableBoard/>
      </div>
    ) : (
      <p>loading...</p>
    );

    return (
      <div style={{background: "#1a1a1a"}}>
        <Header/>
        <Row>
          <Col style={colPoolStyle} xs={24} sm={14}>
            <div>{poolMarkup}</div>
            <Workouts/>
            <Button>Back</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default board;
