import React, {Component} from 'react'
import axios from 'axios';
// import {connect} from 'react-redux'

// import antd
import {Row, Col} from 'antd';

//import components
import Header from '../components/Header';
import Poolcard from '../components/Pool';
// import Profile from '../components/Profile';




class admin extends Component {

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


    return (
      <div>
        <Header/>
         <Row>
          <Col style={colStyle} xs={24} sm={8}>
            <h1> Admin Profile </h1>
            {/* <Profile/> */}

          </Col>
          <Col style={colStyle} xs={24} sm={16}>
            <h1>This is Admin</h1>
            
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

export default (admin)

