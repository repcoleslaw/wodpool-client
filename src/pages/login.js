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

    const rowStyle = {
      width: "100%",
      height: "100vh",
      background: `url(${background})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
    const cardStyle = {
      maxWidth: "600px",
      margin: "0 auto",
      position: "relative",
      top: "5em",
      textAlign: "left",
      padding: "2em",
      background:
        "radial-gradient(100% 100% at 50% 100%, rgba(71, 71, 71, 0.95) 0%, rgba(26, 26, 26, 0.95) 100%)",
      border: "none",
      color: "#fff",
    };
    const colStyle = {
      justifyItems: "center",
      margin: "0 auto",
      position: "relative",
      textAlign: "center",
    };
    const butPrimaryStyle = {
      margin: "1em 2em",
      position: "relative",
      height: "40px",
      padding: "0 3em",
      color: "#FFFFFF",
      textAlign: "center",
      textTransform: "uppercase",
      background: "linear-gradient(99.48deg, #A41EE2 0%, #19B5E7 100%)",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "5px",
      outline: "none",
      border: "none",
    };
    const inputStyle = {
      margin: "1em 0",
    };


    return (
      <Row style={rowStyle}>
        <Col style={colStyle}>
          <img
            src={whiteWordMark}
            style={{
              paddingTop:'5em',
              maxWidth: "400px",
              width: "60%",
              height: "auto",
              marginBottom: "4em",
            }}
            alt="wodpool-logo"
          ></img>
          <Card style={cardStyle}>
            <form  onSubmit={this.handleSubmit}>
              <h1 style={{ color: "white" }}>Please Log In</h1>

              
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
              <button type="submit" style={butPrimaryStyle}>
                Log In
                {ui.loading && (
                  <Spin indicator={LoadingOutlined} size="default"></Spin>
                )}
              </button>
              <br />
              <small>
                Already have an account? Sign Up <Link to="/signup">here</Link>
              </small>
            </form>
          </Card>
        </Col>
      </Row>
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
