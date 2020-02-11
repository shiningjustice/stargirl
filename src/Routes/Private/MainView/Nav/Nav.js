import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <nav className="Nav mainContainer">
      <ul className='Nav'>
        <li><Link className='resetAnchorStyle' to='/'><span role="img" aria-label="star emoji">⭐</span></Link></li>
        <li><Link className='resetAnchorStyle' to='/photos'>photos</Link></li>
        <li><Link className='resetAnchorStyle' to='/videos'>videos</Link></li>
        <li className='logout'>logout</li>
      </ul>
    </nav>
  )
}

export default Nav;