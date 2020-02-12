import React from 'react';
import NavLinks from './NavLinks'

function Header(){
  var headerStyles = {
    margin: '0 0 0 50px',
    paddingTop: '15px'
  }
  return (
    <div style={headerStyles}>
      <NavLinks/>
    </div>
  )
}

  export default Header;
