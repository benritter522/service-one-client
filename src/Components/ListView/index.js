import ProfileCard from '../ProfileCard';
import React, { Component } from 'react'


class ListView extends Component {

  render() {

    return(
      <div>
        <ProfileCard
          business_name="Business Name"
          street_address="123 Main Street"
          city="Springfield"
          state="AB"
          zip_code_first5="12345"
          lat_long="[0,0]"
          loan_size_urgency="I am super urgent!"/>
        <ProfileCard
          business_name="Business Name"
          street_address="123 Main Street"
          city="Springfield"
          state="AB"
          zip_code_first5="12345"
          lat_long="[0,0]"
          loan_size_urgency="I am super urgent!"/>
      </div>
    )
  }
}


export default (ListView);
