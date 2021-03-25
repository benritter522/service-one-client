import React, { Component } from 'react';
import { Card as Base } from '@material-ui/core';
import PropTypes from 'prop-types';
import './index.css'

class ProfileCard extends Component {

  render() {

    return (
      <Base className={'card'}>
      <img src={`${process.env.PUBLIC_URL}/images/placeholder.jpg`} alt='placeholder'/>
      <div className='text'>
        <div className='cardHeader'>{this.props.business_name}</div>
        <div className='cardBody'>
          <div>{this.props.street_address},</div>
          <div>{this.props.city}, {this.props.state} {this.props.zip_code_first5}</div>
          <br/>
          <div style={{fontStyle: 'italic'}}>{this.props.loan_size_urgency}</div>
          <a style={{fontWeight: '400'}} href={`https://www.google.com/maps/search/?api=1&query=${this.props.lat_long[0]},${this.props.lat_long[1]}`}>Get Directions on Google Maps</a>
        </div>
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
