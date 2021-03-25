import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css'

class NeedLevel extends Component {

  render() {
    let needLevel = ''
    if (this.props.loan_size_rank_by_state < 0.25) {
        needLevel = 'Minor';
    } else if (this.props.loan_size_rank_by_state >= 0.25 && this.props.loan_size_rank_by_state < 0.50) {
        needLevel = 'Moderate';
    } else if (this.props.loan_size_rank_by_state >= 0.50 && this.props.loan_size_rank_by_state < 0.75) {
        needLevel = 'Serious';
    } else if (this.props.loan_size_rank_by_state >= 0.75) {
        needLevel = 'Critical'
    }
    return (
      <div>
      <img src={`${process.env.PUBLIC_URL}/images/Chip ${needLevel} Need.png`} alt={`indicator of ${needLevel} need`}/>
      </div>
    );
  }

}


export default (NeedLevel)
