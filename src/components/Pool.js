import React, { Component } from 'react';
import {Card, Button} from 'antd';
import {Link} from 'react-router-dom';

class PoolCard extends Component {


  render() {
    const { pool : {
      competitorCount, cost, desc, title, maxParticipants, poolID, active
    }} = this.props

    const style = {
      margin:"2em 0",
      padding:"2em",
      background:"rgba(0,0,0,0.5)",
      border:"none",
      color:"white"

    }



    function ActivePool(){
      //check if you can join the pool
      if (active){
        return (
          <Card  title={<h2 style={{color:"white"}}>{title}</h2>}
          style={style}
          hoverable={true}
          extra={`${competitorCount}/${maxParticipants}`}>
          <h1 style={{textTransform:"uppercase"}}>This Pool is already underway!</h1>
          <p>{competitorCount}/{maxParticipants}</p>
          <p>{desc}</p>
          <p>{cost}</p>
          {/* add how to play along without joining this reward package "if you missed it, still follow along" */}
          <Button disabled shape="round" style={{margin:"1em 1em"}}><Link to={`/pools/${poolID}/join`}>Join Pool</Link></Button>
          <Button shape="round" style={{margin:"1em 1em"}}><Link to={`/pools/${poolID}`}>Go To Board</Link></Button>
          {/* //link to next one */}
          <br/>
          <Button>Sign up for the next Pool!</Button>
          
          </Card>
        )
      } 
      //available pool card
      else
       {
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
          <Button style={{margin:"1em 1em"}} shape="round"><Link to={`/pools/${poolID}/join`}>Join Pool</Link></Button>
          <Button style={{margin:"1em 1em"}} shape="round"><Link to={`/pools/${poolID}`}>Go To Board</Link></Button>
        </Card>
        )
      }
    }



 
  

    return (
      <>
        <ActivePool/>
      </>

    )
  }
}

export default PoolCard
