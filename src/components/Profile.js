import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// antD stuff
import {Card} from 'antd';



class Profile extends Component {
  render() {
    const {user: {credentials: {handle, createdAt, imagueUrl, bio, twitter, location, instagram}, loading}} = this.props;
    
    let profileMarkup = !loading ? (authenticated ? (
      <Card>
        
      </Card>
    ) : (<p>no profile data</p>)) : (<p>loading...</p>)

    return profileMarkup;
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

Profile.propTypes = {
  user: PropTypes.object.isRequired
}



export default connect(mapStateToProps)(Profile)
