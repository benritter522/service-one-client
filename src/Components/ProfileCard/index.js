import React, { Component } from 'react';
import { Card as Base } from '@material-ui/core';
import PropTypes from 'prop-types';

class ProfileCard extends Component {

  render() {

    return (
      <>
      <h1>{this.props.business_name}</h1>
      <div>{this.props.street_address},</div>
      <div>{this.props.city}, {this.props.state} {this.props.zip_code_first5}</div>
      < />
    );
  }

}

ProfileCard.propTypes = {
  business_name: PropTypes.string,
  street_address: PropTypes.string,

}

export default ProfileCard;
