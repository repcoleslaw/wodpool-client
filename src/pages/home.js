import React, {Component} from 'react'
import axios from 'axios';
// import {connect} from 'react-redux'

// import antd
import {Row, Col, Button, Card} from 'antd';

//import components
import Header from '../components/Header';
import Poolcard from '../components/Pool';
import Profile from '../components/Profile';

//import assets
import image from '../assets/splashbackground_test.png';



class home extends Component {

  state = {
    pools: null
  }

  componentDidMount(){
    axios.get('/pools')
    .then(res => {
      this.setState({
        pools: res.data
      })
    })
    .catch(err => console.log(err));
  }


  render(){
    const colPoolStyle = {
      padding:"4em",
      margin:"0 auto"
    }

    let poolsMarkup = this.state.pools ? (
    this.state.pools.map(pool => <Poolcard pool={pool} key={pool.title}/>)
    ) : <p>loading...</p>

    let weeklyMarkup = this.state.pools ? (
    this.state.pools.map(pool => <Poolcard pool={pool} key={pool.title}/>)
    ) : <p>loading...</p>

  

    return (
      <div>
        <Header/>
         <Row>
          <Col style={colPoolStyle} xs={24} sm={14}>
            <h1>Pools</h1>
            {poolsMarkup}
          </Col>
  
        </Row>
        <Row style={{backgroundColor:"#eeeeee"}}>
          <Col style={colPoolStyle}>
          <h1>Compete as a Team</h1>
          <p style={{color:"white"}}>Gym versus Gym. Team versus Team. However you group yourselves together, put im a solid team effort to conquer the pool. </p>
          <Button style={{margin:"0 2em 0 0 "}}>Join Today</Button>
          <Button>Learn More</Button>
          </Col>
          <Col style={colPoolStyle}>
            <h1>Second Tool</h1>
            <img src={image} style={{maxWidth:"450px", height:"auto"}} alt="competition header"></img>
          </Col>
        </Row>
        <Row style={{justifyContent:"center", textAlign:"center"}}>
          <Col>
            <h1>Rapid Fire Tournament</h1>
            <Row>
              <Card>
                <h1></h1>
                <p>Pool Description</p>
                <Button>Join Board</Button>
             </Card>
              <Card>
                Test
          </Card>
              <Card>
                Test
          </Card>
            </Row>
          </Col>





        </Row>
        <Row> Future Functionality</Row>

      </div>
    )
  }
 
}
// const mapStateToProps = (state) => ({
//   user: state.user,
//   ui: state.ui
// });

export default (home)

