import React from 'react';
import { Link } from 'react-router-dom';

function NavLinks() {
  return (
      <div>
        <Link to="/">Home</Link> | <Link to="/models">Model S</Link> | <Link to="/model3">Model 3</Link> | <Link to="/modelx">Model X</Link> | <Link to="/cybertruck">Create Ticket</Link> | <Link to="/roadster">Roadster</Link> | <Link to="/energy">Energy</Link> 
      </div>
    );
  }

  export default NavLinks;
