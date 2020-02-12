import React from 'react';
import PropTypes from 'prop-types';

function CarStatDetail(props){
  var statDetail = {
    display: 'inline-block',
    paddingRight: '50px'
  }

  return(
    <div style={statDetail}>
      <p>{props.detail}</p>
    </div>
  );
}

CarStatDetail.propTypes = {
  detail: PropTypes.string
}

export default CarStatDetail;
