import React, {Component} from 'react'
import axios from 'axios';

// import antd
import {Row, Col} from 'antd';

//import components
import {Header} from '../components/Header';
import Pool from '../components/Pool';
// import Profile from '../components/Profile';




class home extends Component {

  state = {
    pools: null
  }

  componentDidMount(){
    axios.get('/pools')
    .then(res => {
      console.log(res.data)
      this.setState({
        pools: res.data
      })
    })
    .catch(err => console.log(err));
  }


  render(){
    const colStyle = {
      padding:"4em",
    }

    let poolsMarkup = this.state.pools ? (
    this.state.pools.map(pool => <Pool pool={pool} key={pool.title}/>)
    ) : <p>loading...</p>

    return (
      <div>
        <Header/>
         <Row>
          <Col style={colStyle} xs={24} sm={8}>
            <h1> Profile</h1>

          </Col>
          <Col style={colStyle} xs={24} sm={16}>
            <h1>Pools</h1>
            {poolsMarkup}
          </Col>
  
        </Row>
      </div>
    )
  }
 
}

export default home

