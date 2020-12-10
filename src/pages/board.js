import React, { Component } from "react";
import axios from "axios";

// import {connect} from 'react-redux';

import Header from "../components/Header";

import { Row, Col, Tabs } from "antd";
import { Table } from "antd";

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



    axios.get("/pools/GJHa7F8hqktXLZc6jn2D/board")
    .then((res) => {
      this.setState({
        board: res.data
      });   
    })
     .catch((err)=>console.log(err)); 
  }

 
  render() {
    const colStyle = {
      padding: "4em",
      margin: "4em",
    };
    const colPoolStyle = {
      padding: "4em",
      margin: "4em",
      background: "rgba(0,0,0,0.25)",
      boxShadow: "5px 5px 8px #1A1A1A",
    };
    const { TabPane } = Tabs;

    function callback(key) {
      console.log(key);
    }
    const dataSource = this.state

    const columns = [
      {
        title: "Handle",
        dataIndex: "handle",
        key: "handle",
        render: (text) => <p>{text}</p>,
      },
      {
        title: "Score",
        dataIndex: "score",
        key: "handle",
      },
      {
        title:"Position",
        dataIndex:"position"
      }
    ];

    let poolMarkup = this.state.pool ? (
      <div>
        <h1>{this.state.pool.title}</h1>
        <p>{this.state.pool.desc}</p>
        <iframe
          title={this.state.pool.title}
          width="800"
          height="500"
          src={this.state.pool.videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <hr />
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Leaderboard" key="1">
            <Table columns={columns} data={dataSource} />
          </TabPane>
          <TabPane tab="Workouts" key="2">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
      </div>
    ) : (
      <p>loading...</p>
    );

    return (
      <div>
        <Header />
        <Row>
          <Col style={colStyle} xs={24} sm={6}>
            <h1>Profile</h1>
          </Col>
          <Col style={colPoolStyle} xs={24} sm={14}>
            <div>{poolMarkup}</div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default board;
