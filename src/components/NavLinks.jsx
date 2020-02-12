import React from 'react';
import { Link } from 'react-router-dom';

function NavLinks() {
  var navBarStyles ={
    fontFamily: 'HeiT ASC Traditional Chinese,M Hei PRC W45,AXIS Font Japanese W55,FB New Gothic,Gotham Medium,system,sans-serif',
    textTransform: 'uppercase',
    textAlign: 'center'
  }
  var teslaLogo ={
    float: 'left'
  }
  var navMargins ={
    margin: '0 10px'
  }
  return (
      <div style={navBarStyles}>
        <Link style={teslaLogo}  to="/">TESLA</Link>  <Link style={navMargins} to="/models">Model S</Link>  <Link style={navMargins} to="/model3">Model 3</Link>  <Link style={navMargins} to="/modelx">Model X</Link>  <Link style={navMargins} to="/cybertruck">Cybertruck </Link>  <Link style={navMargins} to="/roadster">Roadster</Link>  <Link style={navMargins} to="/energy">Energy</Link>
      </div>
    );
  }

  export default NavLinks;
