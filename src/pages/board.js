import React, { Component } from 'react';
import axios from 'axios';

// import {connect} from 'react-redux';

import Header from '../components/Header';
import Poolpage from '../components/Poolpage';

import {Row, Col} from 'antd';



class board extends Component {
  
  state = {
    pool: null,
  }

  

  componentDidMount(){
    const path = this.props.location.pathname
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

    let poolMarkup = this.state.pool ? (
      this.state.pool.map(pool => <Poolpage pool={pool} key={pool.title}/>)
      ) : <p>loading...</p>

    return (
      <div>
        <Header/>
        <Row>
          <Col xs={24} sm={8}> 
            <h1>Profile</h1>
          </Col>
          <Col xs={24} sm={16}>
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
