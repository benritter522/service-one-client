import ProfileCard from '../ProfileCard';
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class ListView extends Component {

  render() {

    return(
      <div>
        <ProfileCard
          business_name="Business Name"
          street_address="123 Main Street"
          city="Springfield"
          state="AB"
          zip_code_first5="12345"/>
        <ProfileCard
          business_name="Business Name"
          street_address="123 Main Street"
          city="Springfield"
          state="AB"
          zip_code_first5="12345"/>
      </div>
    )
  }
}


export default withRouter(ListView);
