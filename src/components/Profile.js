import React, { Component } from 'react';
import {connect} from 'react-redux';
import dayjs from 'dayjs';
import axios from 'axios';

import './profile.css'

// antD stuff
import {Card} from 'antd';

const avatarImg = {
  width:"200px",
  height:"200px"
}




class Profile extends Component {




  render(state) {
    
    return (
      <div>
      <div>This should be where the profile exists</div>
      <button onClick={this.fireConsoleLog}>test user data</button>
      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});





export default connect(mapStateToProps)(Profile)
