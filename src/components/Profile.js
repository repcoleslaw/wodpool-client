import React, { Component } from "react";

import { PropTypes } from "prop-types";
import dayjs from "dayjs";

//redux stuff
import { connect } from "react-redux";
import {uploadImage, logoutUser} from '../redux/actions/userActions'

import "./profile.css";

// antD stuff
import { Tooltip } from "antd";
import { EditOutlined, InstagramFilled, TwitterOutlined } from '@ant-design/icons';


class Profile extends Component {

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const image = this.fileInput.current.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name)
    this.props.uploadImage(formData);
  }

  handleEditPicture = () => {
    const fileInput = document.getElementById("imgInput");
    fileInput.click();
  }


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

    const iconColor = {
      color:"white",
      fontSize:"20px"
    }

    const imageStyle = {
      width: "200px",
      height: "200px",
      objectFit: "cover",
      maxWidth: "100%",
      borderRadius: "50%"
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
            <br/>
            <Tooltip title="edit profile image">
              <input type="file" id="imgInput" hidden="hidden"ref={this.fileInput} onChange={this.handleSubmit}/>
                <button onClick={this.handleEditPicture} className="profile-Btn"><EditOutlined style={iconColor} /></button>

            </Tooltip>

          </div>
          <div>
            <h2 className="profileTitle">{credentials.handle}</h2>
            
            <button>edit details</button>
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
                <p><InstagramFilled /> {credentials.instagram}</p>
              )}
              {credentials.twitter && <p><TwitterOutlined /> {credentials.twitter}</p>}
            </label>
              {credentials.isAdmin && <p> I have admin{credentials.isAdmin}</p>}

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

const mapActionsToProps = {logoutUser, uploadImage};

Profile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  uploadImage: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(Profile);
