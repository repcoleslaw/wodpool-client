import React, { Component } from 'react';
import axios from 'axios';

// import {connect} from 'react-redux';

import Header from '../components/Header';


import {Row, Col, Tabs} from 'antd';
import { Table, Tag, Space} from 'antd';



class board extends Component {
  
  state = {
    pool: null,
  }

  
  

  componentDidMount(){
    const path = this.props.location.pathname
    let registeredUsers;
    axios.get(path)
    .then(res => {
      console.log(res.data)
        this.setState({
        pool: res.data
      })

    })
    .catch(err => console.log(err));
    
    
    console.log(this.state)
  }

  


  render() {

    const colStyle = {
      padding:"4em",
      margin:"4em",
    }
    const colPoolStyle = {
      padding:"4em",
      margin:"4em",
      background:"rgba(0,0,0,0.25)",
      boxShadow:"5px 5px 8px #1A1A1A"
    }
    const { TabPane } = Tabs;

    function callback(key) {
      console.log(key);
      }
      const dataSource = [
        {
          key: "1",
          name: "Mike",
          age: 32,
          address: "10 Downing Street",
        },
        {
          key: "2",
          name: "John",
          age: 42,
          address: "10 Downing Street",
        },
      ];
    
    const columns = [

      {
        title: 'Rank',
        dataIndex: 'rank',
        key:'rank',
        render: text => <a>{text}</a>
      },
      {
        title: 'Handle',
        dataIndex: 'handle',
        key:'handle',
        render: text => <a>{text}</a>
      },
      {
        title:'Score',
        dataIndex:'score',
        key:'handle'
      }
    ]

    let poolMarkup = this.state.pool ? (
      <div>
        <h1>{this.state.pool.title}</h1>
        <p>{this.state.pool.desc}</p>
        <iframe
          title={this.state.pool.title}
          width="800"
          height="500"
          src={this.state.pool.videoUrl}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <hr/>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Leaderboard" key="1">
            <Table columns={columns} data={dataSource}/>
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
        <Header/>
        <Row>
          <Col style={colStyle} xs={24} sm={6}> 
            <h1>Profile</h1>
          </Col>
          <Col style={colPoolStyle} xs={24} sm={14}>
            <div>
            {poolMarkup}
            </div>
          </Col>
        </Row>
        
      </div>
    )
  }
}

export default board
