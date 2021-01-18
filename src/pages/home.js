import React, {Component} from 'react'
import axios from 'axios';
// import {connect} from 'react-redux'

// import antd
import {Row, Col} from 'antd';

//import components
import Header from '../components/Header';
import Poolcard from '../components/Pool';
// import Profile from '../components/Profile';




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

  

    return (
      <div style={{background:"#a1a1a1"}}>
        <Header/>
         <Row>
          <Col style={colPoolStyle} xs={24} sm={14}>
            <h1>Pools</h1>
            {poolsMarkup}
          </Col>
  
        </Row>
      </div>
    )
  }
 
}
// const mapStateToProps = (state) => ({
//   user: state.user,
//   ui: state.ui
// });

export default (home)

