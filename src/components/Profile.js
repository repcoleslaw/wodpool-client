import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import dayjs from "dayjs";
import axios from "axios";

import "./profile.css";

// antD stuff
import { Card } from "antd";

const avatarImg = {
  width: "200px",
  height: "200px",
};

const styles = {};

class Profile extends Component {
  render(props) {
    const {
      user: { credentials, loading, authenticated },
    } = this.props;

    const handleLog = (e) => {
      console.log(this.props);
    };

    const profileContainer = {
      position: "relative",
      textAlign: "center",
    };

    const imageStyle = {
      width: "200px",
      height: "200px",
      objectFit: "cover",
      maxWidth: "100%",
    };

    let profileMarkup = !loading ? (
      authenticated ? (
        <div style={profileContainer}>
          <div className="profile-image">
            <img
              style={imageStyle}
              src={credentials.imageUrl}
              alt="profileImage"
            ></img>
          </div>
          <div>
            <h2 className="profileTitle">{credentials.handle}</h2>
            
            <button>edit details</button>
            <button>upload image</button>
            <div className="profile-details">
            <hr className="profileHR" />
            {credentials.location && (<p>{credentials.location}</p>)}
      {credentials.createdAt && (<p>member since {dayjs(credentials.createdAt).format("MMM, YYYY")}</p>)}
            {credentials.bio && (
              <p className="profile-bio">{credentials.bio}</p>
            )}
            
            </div>
            
            <label className="profile-label">
              <hr className="profileHR"/>
              {credentials.handle && (
                <p>wodpool: {credentials.handle}</p>
              )}
              {credentials.instagram && (
                <p>instagram: {credentials.instagram}</p>
              )}
              {credentials.twitter && <p>twitter: {credentials.twitter}</p>}
            </label>
            

          </div>

          
        </div>
      ) : (
        <div>
          <p>Please Log In</p>
          <button onClick={handleLog}>print Data</button>
        </div>
      )
    ) : (
      <p>loading</p>
    );

    return profileMarkup;
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

Profile.propTypes = {
  user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Profile);
