import React from 'react'

import {Row, Col, Tabs, Table, Collapse, Button, Statistic} from 'antd';

import {UserOutlined } from '@ant-design/icons';

// import {Carousel} from 'antd';

import {Header} from './Header';




function Tournament() {

  const { Countdown } = Statistic;
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK
  // temporary data
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      score: '1000',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      score: '997',
    },
    {
      key: '3',
      name: 'John',
      age: 42,
      score: '997',
    },
  ];
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Score',
      dataIndex: 'score',
      key: 'score',
    },
  ];

  const ytFrame = {
    width:"100%",
    height:"400px",
    border: "1px solid red"
  }

  function callback(key) {
    console.log(key);
  }
  const { TabPane } = Tabs;
  const { Panel } = Collapse;

  return (
    <div className="pagewrapper">
      <Header/>
      <Row>
        <Col xs={24} md={8} style={{padding:"4em"}}>
          <h1>The Tournament Title</h1>
          <span>and a hook line</span>
          <Statistic valueStyle={{fontSize:"5em"}}title="Prize Pool" value={`$ ${dataSource.length * 20}`}/>
          <Statistic valueStyle={{fontSize:"5em"}} title="Joined Pool" prefix={<UserOutlined />}value={dataSource.length} suffix={"/50"}/>
          <Countdown title="Countdown" valueStyle={{fontSize:"5em"}}value={deadline} format="DD:HH:mm:ss"/>
          <Button style={{width:'100%'}}>Join this Pool</Button>

        </Col>
        <Col xs={24} md={14} style={{padding:"4em"}}>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/yyo_TcZCrS4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Events" key="1">
              <Collapse onChange={callback}>
                <Panel header="This is Event 1" key="1">
                  <p>This will be a bit of description text</p>
                  <Button>Go To Workout</Button>
                  <Button>Submit Score</Button>
                </Panel>
                <Panel header="This is Event 2" key="2">
                  <p>Event 1 text and some description</p>
                  <Button>Go To Workout</Button>
                  <Button>Submit Score</Button>
                </Panel>
                <Panel header={<Countdown value={deadline} />} key="3" disabled>
                  <p>Event 1 text and some description</p>
                </Panel>
                <Panel header={<Countdown value={deadline} />} key="4" disabled>
                  <p>Event 1 text and some description</p>
                </Panel>
                <Panel header={<Countdown value={deadline} />} key="5" disabled>
                  <p>Event 1 text and some description</p>
                </Panel>
              </Collapse>

            </TabPane>
            <TabPane tab="Leaders" key="2">
              <Table dataSource={dataSource} columns={columns} />
            </TabPane>
          </Tabs>
          </Col>
      </Row>

      {/* Sort how to store tournaments I am registered for */}
      <Row>
        <Col xs={24}>
          

        </Col>
      </Row>

    </div>
  )
}

export default Tournament
