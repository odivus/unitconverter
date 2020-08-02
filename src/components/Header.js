import React from 'react';
import {Link, useLocation} from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <header>
      <span className="categories">
        <Link to='/'>Categories</Link>
      </span>{location.pathname}
    </header>
  );
}

export default Header;
