import React from "react";
import { Link } from "react-router-dom";

import { Row, Col, Button, Statistic, Card } from "antd";

// import assets

import background from "../assets/splashbackground_test.png";
import whiteWordMark from "../assets/WordMark_Shadow.svg";

function splash() {
  const rowStyle = {
    width: "auto",
    height: "100vh",
    background: `url(${background})`,
    backgroundSize: "cover",
  };

  const colStyle = {
    justifyItems: "center",
    margin: "0 auto",
    position: "relative",
    top: "15em",
    textAlign: "center",
  };

  const butPrimaryStyle = {
    margin: "0 2em",
    padding: "0 3em",
    color: "#FFFFFF",
    textTransform: "uppercase",
    background: "linear-gradient(99.48deg, #A41EE2 0%, #19B5E7 100%)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "5px",
    outline: "none",
    border: "none",
  };
  const butSecondaryStyle = {
    margin: "0 2em",
    padding: "0 3em",
    color: "#FFFFFF",
    textTransform: "uppercase",
    background:
      "radial-gradient(100% 100% at 50% 100%, rgba(71, 71, 71, 0.95) 0%, rgba(26, 26, 26, 0.95) 100%)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "5px",
    outline: "none",
    border: "none",
  };

  const cardStyle = {
    background:
      "radial-gradient(100% 100% at 50% 100%, rgba(71, 71, 71, 0.95) 0%, rgba(26, 26, 26, 0.95) 100%)",
    padding: "4em",
    border: "none",
  };

  const { Countdown } = Statistic;
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

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
          alt="wodpool-background"
        />
        <Card style={cardStyle}>
          <Countdown
            valueStyle={{ fontSize: "4em", color: "white" }}
            value={deadline}
            format="DD:HH:mm:ss"
          />
          <h2 style={{ color: "#fff" }}>Think you can survive the pool?</h2>
          <div style={{ marginTop: "4em" }}>
            <Button style={butPrimaryStyle}>
              <Link to="/login">Log In</Link>
            </Button>
            <Button style={butSecondaryStyle}>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        </Card>
      </Col>
    </Row>
  );
}

export default splash;
