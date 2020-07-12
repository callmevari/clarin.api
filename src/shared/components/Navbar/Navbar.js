import React from 'react';
import '../../images/clarin_logo.png';

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <img src='assets/clarin_logo.png' style={{ width: '275px' }} />
      </div>
    </nav>
  );
};

export default Navbar;
