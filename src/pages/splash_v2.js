import React, { Component } from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';


import {Row, Col} from 'antd';
import {Input, Card, Spin, Alert, Statistic, Button} from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import { LoadingOutlined } from '@ant-design/icons';

import background from '../assets/splashbackground_test.png';
import whiteWordMark from '../assets/WordMark_Shadow.svg';

//redux stuff
import {connect} from 'react-redux';
import {signupUser} from '../redux/actions/userActions';

//import assets
import Header from '../components/Header';



export class signup extends Component {

  constructor(){
    super();
    this.state = {
      email:'',
      password:'',
      confirmPassword:'',
      handle:'',
      errors: {}
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.ui.errors !== this.props.ui.errors) {
      this.setState({ errors: this.props.ui.errors });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newUserData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      handle: this.state.handle,

    }
    this.props.signupUser(newUserData, this.props.history);    
  };
  
  handleChange = (e) => {
    
    this.setState({
      [e.target.name]: e.target.value
    })
    
  }
  render() {
    const {errors} = this.state;
    const {ui:{loading}} = this.props;


    const cardStyle={
      maxWidth:"600px",
      margin:"0 auto",

      textAlign:"left",
      padding:"2em",
      background:"radial-gradient(100% 100% at 50% 100%, rgba(71, 71, 71, 0.95) 0%, rgba(26, 26, 26, 0.95) 100%)",
      border:"none",
      color:"#fff"
    }

    const inputStyle = {
      margin:"1em 0"
    }

    const errorStyle ={
      margin:".5em 0"
    }

    const { Countdown } = Statistic;
    const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

    return (
      <>
      <div style={{zIndex:"-1", position:"absolute", top:'0', width:'100vw', height:'90vh', background: `url(${background})`}}/>
      <Header/>
        <Row style={{ height: "74vh" }}>
          <Col style={{ textAlign: "center", margin: "5em auto" }}>
            <img
              src={whiteWordMark}
              style={{
                maxWidth: "400px",
                width: "15vw",
                height: "auto",
                marginBottom: "1em",
              }}
              alt="wodpool-logo"
            ></img>
            <Countdown value={deadline} valueStyle={{color:"#ffffff", paddingBottom:"15px", fontSize:"4em", textShadow:"2px 2px 4px #000000"}}/>
            <Button block type="primary" style={{marginBottom:"1em", textTransform:"uppercase", fontFamily:"Roboto Condensed", letterSpacing:".25em"}}>
              <a href="#signup">Sign up
              </a>
            </Button>
            <Button block type="primary" style={{marginBottom:"1em", textTransform:"uppercase", fontFamily:"Roboto Condensed", letterSpacing:".25em"}}>
              <Link to="/login">Login
              </Link>
            </Button>
          </Col>
         
         
         
        </Row>
       <Row style={{backgroundColor:"#a1a1a1", padding:"4em"}}>
       <Card style={cardStyle}>
           
          <form id="signup" noValidate onSubmit={this.handleSubmit}>
            <h1 style={{ color: "white" }}>Sign Up</h1>

            <label>
              Email
                <Input
                id="email"
                name="email"
                type="email"
                placeholder="email"
                style={inputStyle}
                value={this.state.email}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Password
                <Input.Password
                id="password"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                style={inputStyle}
                placeholder="password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </label>
            <label>
              Confirm Password
                <Input.Password
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={this.state.confirmPassword}
                onChange={this.handleChange}
                style={inputStyle}
                placeholder="password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </label>
            <label>
              User Handle
                <Input
                id="handle"
                name="handle"
                type="email"
                placeholder="handle"
                style={inputStyle}
                value={this.state.handle}
                onChange={this.handleChange}
              />
            </label>



            {errors.general && (
              <Alert style={errorStyle} message={errors.general} type="error" showIcon style={{ marginTop: "1em" }} />
            )}
            {errors.email && (
              <Alert message={errors.email} type="error" showIcon />
            )}
            {errors.password && (
              <Alert message={errors.password} type="error" showIcon />
            )}
            {errors.handle && (
              <Alert message={errors.handle} type="error" showIcon />
            )}
            <br />
            <button type="submit" block>
              Sign Up
                {loading && (
                <Spin indicator={LoadingOutlined} size="default"></Spin>
              )}
            </button>
            <br />
            <small>Already have an account? Log in <Link to="/login">here</Link></small>

          </form>
        </Card>
       </Row>

      </>

    );
  }
}


signup.propTypes = {
  signupUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  ui: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  user: state.user,
  ui: state.ui
});




export default connect(mapStateToProps, {signupUser})(signup)
