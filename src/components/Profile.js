import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import dayjs from 'dayjs';

import './profile.css'

// antD stuff
import {Card, Button} from 'antd';

const avatarImg = {
  width:"200px",
  height:"200px"
}



class Profile extends Component {

  handleImageChange = (e) => {
    const image = e.target.files[0];
    //send to server
    
  }

  render() {
    const {
      user:{
        credentials: {handle, createdAt, imageUrl, bio, twitter, location, instagram}, loading, 
        authenticated, 
        pools}
      } = this.props;
    
    let profileMarkup = !loading ? 
    (authenticated ? (
        <Card>
          <div className="profile">
            <div className="profile-image">
            <img style={avatarImg} src={imageUrl} alt="profile"></img>
            <input type="file" id="imageInput" onChange={this.handleImageChange}>change profile image</input>
            </div>
            
            <br/>
            
            <h2>{handle}</h2>
            {bio && <p>bio: {bio}</p>}
            {location && <p>location: {location}</p>}
            <hr/>
            {twitter && <p>twitter: {twitter}</p>}
            {instagram && <p>instagram: {instagram}</p>}
            <hr/>
            <span>Joined  {dayjs(createdAt).format('MMM YYYY')}</span>
            <br/>
            <span>Competed in  {pools.length} pools</span>
            
          </div>
        </Card>
      ) : (<p>No profile found, please log in again.</p>)
    ) 
    : (<p>loading...</p>)

    return profileMarkup;
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});





export default connect(mapStateToProps)(Profile)
