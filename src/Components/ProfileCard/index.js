import React, { Component } from 'react';
import { Card as Base } from '@material-ui/core';
import PropTypes from 'prop-types';
import './index.css'

class ProfileCard extends Component {

  render() {

    return (
      <Base class={'card'}>
      <div class='cardHeader'>{this.props.business_name}</div>
      <div class='cardBody'>
        <div>{this.props.street_address},</div>
        <div>{this.props.city}, {this.props.state} {this.props.zip_code_first5}</div>
      </div>
      </Base>
    );
  }

}

ProfileCard.propTypes = {
  business_name: PropTypes.string,
  street_address: PropTypes.string,

}

export default ProfileCard;
