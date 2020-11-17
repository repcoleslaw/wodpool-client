import React, { Component } from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';


import {Row, Col} from 'antd';
import {Input, Card, Spin, Alert} from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import { LoadingOutlined } from '@ant-design/icons';

import background from '../assets/splashbackground_test.png';
import whiteWordMark from '../assets/WordMark_Shadow.svg';

//redux stuff
import {connect} from 'react-redux';
import {signupUser} from '../redux/actions/userActions';



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

    
    const rowStyle={
      width:"100%",
      height:"100vh",
      background: `url(${background})`,
      backgroundSize:"cover",
      backgroundRepeat:"no-repeat",
    };
    const cardStyle={
      maxWidth:"600px",
      margin:"0 auto",
      position:"relative",
      top:"5em",
      textAlign:"left",
      padding:"2em",
      background:"radial-gradient(100% 100% at 50% 100%, rgba(71, 71, 71, 0.95) 0%, rgba(26, 26, 26, 0.95) 100%)",
      border:"none",
      color:"#fff"
    }
    const colStyle = {
      justifyItems:"center",
      margin:"0 auto",
      position:"relative",
      top:"15em",
      textAlign: "center"
    };
    const butPrimaryStyle ={
      margin:"1em 2em",
      position:"relative",
      height:"40px",
      padding:"0 3em",
      color:"#FFFFFF",
      textAlign:"center",
      textTransform:"uppercase",
      background: "linear-gradient(99.48deg, #A41EE2 0%, #19B5E7 100%)",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "5px",
      outline:"none",
      border:"none"
    }
    const inputStyle = {
      margin:"1em 0"
    }



    return (
      <Row style={rowStyle}>
        <Col style={colStyle}>
          <img
            src={whiteWordMark}
            style={{
              maxWidth: "400px",
              width: "60%",
              height: "auto",
              marginBottom: "4em",
            }}
            alt="wodpool-logo"
          ></img>
          <Card style={cardStyle}>
            <form noValidate onSubmit={this.handleSubmit}>
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
                <Alert message={errors.general} type="error" showIcon style={{marginTop:"1em"}}/>
              )}
              {errors.email && (
                <Alert message={errors.email} type="error" showIcon/>
              )}
              {errors.password && (
                <Alert message={errors.password} type="error" showIcon/>
              )}
              {errors.handle && (
                <Alert message={errors.handle} type="error" showIcon/>
              )}
              {errors.agreeTOS && (
                <Alert message={errors.agreeTOS} type="error" showIcon/>
              )}
              <br/>
              <button type="submit" style={butPrimaryStyle}>
                Sign Up
                {loading && (
                  <Spin indicator={LoadingOutlined} size="default"></Spin>
                )}
              </button>
              <br/>
              <small>Already have an account? Log in <Link to="/login">here</Link></small>

            </form>
          </Card>
        </Col>
      </Row>
    );
  }
}



const mapStateToProps = (state) => ({
  user: state.user,
  ui: state.ui
});

signup.propTypes = {
  signupUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  ui: PropTypes.object.isRequired
}

export default connect(mapStateToProps, {signupUser})(signup)
