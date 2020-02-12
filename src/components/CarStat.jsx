import React from 'react';
import PropTypes from 'prop-types';

function CarStat(props){
  var inline = {
    display: 'inline-block'
  }
  return(
    <div style={inline}>
      <h3>{props.stat}</h3>
    </div>
  );
}

CarStat.propTypes = {
  stat: PropTypes.string
}

export default CarStat;
