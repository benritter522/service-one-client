import Map from '../Map';
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class MapView extends Component {

  render() {

    return(
          <Map />
    )
  }
}


export default withRouter(MapView);
