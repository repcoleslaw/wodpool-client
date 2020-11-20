import React from 'react'
import {Link} from 'react-router-dom'

//components
import Header from '../components/Header';

//import antd things
import {Row, Col} from 'antd'
import {Collapse} from 'antd'

function about() {

  const colStyle = {
    padding:"4em",
  }
  function callback(key) {
   
  }

  const {Panel} = Collapse;
  return (
    <div>
      <Header/>
      <Row>
        <Col style={colStyle} xs={24} sm={8}>
          Expand Profile [+]
        </Col>
        <Col style={colStyle} xs={24} sm={16}>
          <h1>About us</h1>
          <small>Have some questions? Maybe we have can tell you a bit about us. </small>
          <hr/>
          <h2>WODPOOL</h2>
          <p>WODPOOL is a fitness program provider. We offer a variety of programs, known on this site as Pools, that are available to the registered users. Some of the pools are available for free, and others are available for purchase! </p>
          <p> The fun part of registering for one of our Pools is that you are not exercising alone! Every participant in the pool that you have registered for will be uploading their results to the site, allowing all participants in the pool to know how they are doing as a group. This allows you to have some healthy and friendly competition kick in when you see your pools leaderboard.</p>
          <p>Grab your friends and join a Pool!</p>
          <h2>How It Works</h2>
          <p>Join a Pool, get access to the program, do your best, and upload your results. As simple as that!</p>
          <p>At the start of each week of the Pool, the next workouts will be released. It is on you to complete the workouts within the week and upload your results back to the site. After each week, a specified bottom percentage of the Pool will be eliminated from the results board. Don't worry! You will still be able to see the rest of the exercises, but you will have lost out on the bragging rights.</p>
          <p>For those purchasing a paid Pool, things get kicked up a notch. A percentage of the funds from the Pools purchased are contributed back into a reimbursement package. Think of it as the e-bates of fitness programs. Those who survive the pool get some of the pool redistributed back to them, in addition to all the bragging rights of winning the pool. </p>
          <p>Think you survive the Pool? Let's get you on one <Link to="/home">here</Link></p>
          <hr/>
          <h2>FAQ</h2>
          <Collapse defaultActiveKey={['1']} onChange={callback}>
            <Panel header="Can I join multiple Pools" key="1">
              <p>Technically there is nothing stoping you from joining multiple pools, but we recommend you do participate in one pool at a time.</p>
            </Panel>
            <Panel header="Do I have to post to social media?" key="2">
              <p>No, but, we would like you to. By sharing on social media we accomplish 2 things. The first, driving excitement and engagement to the site increases the competitive nature and reimbursements on each pool. Secondly, use video as a means of validating your winning entries, so if you post your videos online it will be easier for you to remember to submit them.</p>
            </Panel>
            <Panel header="How is the money securely gathered?" key="3">
              <p>We are using Stripe to manage secure payments.</p>
            </Panel>
            <Panel header="When I win, how will I be reimbursed?" key="4">
              <p>You will be contacted through your user accounts' provided email, and from there our administrative team will set up your preferred e-transfer method.</p>
            </Panel>
            <Panel header="If I fall off the table, do I still get to continue the workouts?" key="5">
              <p>Yes! Once you purchased into a pool, the access to fitness content is yours to keep. Even though you may not be in line to win the pool, we want you to keep training!</p>
            </Panel>
          </Collapse>
          <small>If there are other questions consider sending us an email at info@wodpool.com</small>
        </Col>
      </Row>


    </div>
  )
}

export default about
