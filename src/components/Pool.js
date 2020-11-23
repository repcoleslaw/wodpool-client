import React, { Component } from 'react';
import {Card, Button} from 'antd';
import {Link} from 'react-router-dom';

class PoolCard extends Component {
  render() {
    const { pool : {
      competitorCount, cost, desc, title, maxParticipants, poolID
    }} = this.props

    const style = {
      margin:"2em 0",
      padding:"2em",
      background:"rgba(0,0,0,0.5)",
      border:"none",
      color:"white"

    }

    return (
      <Card
        title={<h2 style={{color:"white"}}>{title}</h2>}
       style={style}
       hoverable={true}
       extra={`${competitorCount}/${maxParticipants}`}
      >
        <p>{competitorCount}/{maxParticipants}</p>
        <p>{desc}</p>
        <p>{cost}</p>
        <Button><Link to={`/pools/${poolID}/join`}>Join Pool</Link></Button>
        <Button><Link to={`/pools/${poolID}`}>Go To Board</Link></Button>
      </Card>
    )
  }
}

export default PoolCard
