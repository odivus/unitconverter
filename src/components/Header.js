import React from 'react';
import {Link, useLocation} from 'react-router-dom';

function Header() {
  const location = useLocation(),
        locationPathName = location.pathname.slice(1),
        locationPathNameFormat = locationPathName[0]
          .toUpperCase() + locationPathName.slice(1);

  return (
    <header>
      <Link to='/'>
        <span className="categories">
          Categories
        </span>
      </Link>
      &nbsp;{locationPathNameFormat}
    </header>
  );
}

export default Header;
