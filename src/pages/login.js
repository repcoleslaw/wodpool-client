import React, { Component } from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';


//antd stuff
import {Row, Col} from 'antd';
import {Input, Card, Alert, Spin} from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import { LoadingOutlined } from '@ant-design/icons';

//redux
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';

//assets
import background from '../assets/splashbackground_test.png';
import whiteWordMark from '../assets/WordMark_Shadow.svg';

//components
import Header from '../components/Header';




export class login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }
// ????? ComponentWillRecieveProps
  componentDidUpdate(prevProps) {
    if (prevProps.ui.errors !== this.props.ui.errors) {
      this.setState({ ...this.state, errors: this.props.ui.errors });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
     this.props.loginUser(userData, this.props.history);
     
  };

  handleChange = (e) => {
    
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { ui } = this.props;
    const { errors } = this.state;

    const cardStyle = {
      maxWidth: "600px",
      margin: "0 auto",
      textAlign: "left",
      padding: "2em",
      background:
        "radial-gradient(100% 100% at 50% 100%, rgba(71, 71, 71, 0.95) 0%, rgba(26, 26, 26, 0.95) 100%)",
      border: "none",
      color: "#fff",
    };

   
    const inputStyle = {
      margin: "1em 0",
    };


    return (
      <>
      <div style={{zIndex:"-1", position:"absolute", top:'0', width:'100vw', height:'90vh', background: `url(${background})`}}/>
      <Header/>
      <Row>
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
          <Card style={cardStyle}>
            <form  onSubmit={this.handleSubmit}>
              <h1 style={{ color: "white" }}>Log In</h1>

              
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
              

              
              {errors && errors.email && (
                <Alert style={{marginBottom:10}}message={errors.email} type="error" showIcon />
              )}
              {errors && errors.password && (
                <Alert style={{marginBottom:10}} message={errors.password} type="error" showIcon />
              )}
              {errors && errors.general && (
                <Alert
                  message={errors.general}
                  type="error"
                  showIcon
                  style={{ marginTop: "1em", marginBottom:10 }}
                />
              )}
              <button type="submit">
                Log In
                {ui.loading && (
                  <Spin indicator={LoadingOutlined} size="default"></Spin>
                )}
              </button>
              <br />
              <small>
                Already have an account? Sign Up <Link to="/">here</Link>
              </small>
            </form>
          </Card>

          </Col>
         
         
         
        </Row>

      </>
     
    );
  }
}

login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  ui: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  user: state.user,
  ui: state.ui
});




export default connect(mapStateToProps, {loginUser})(login)
