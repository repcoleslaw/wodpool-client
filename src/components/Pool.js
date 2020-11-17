import React, { Component } from 'react';
import {Card, Button} from 'antd';
import {Link} from 'react-router-dom';

class Pool extends Component {
  render() {
    const { pool : {
      competitorCount, cost, desc, title, maxParticipants, poolID
    }} = this.props

    const style = {
      margin:"2em 0",
      padding:"2em"

    }

    return (
      <Card
        title={title}
        style={style}
      >
        <p>{competitorCount}/{maxParticipants}</p>
        <p>{desc}</p>
        <p>{cost}</p>
        <Button><Link to={`/pools/${poolID}/join`}>Join Pool</Link></Button>
      </Card>
    )
  }
}

export default Pool
