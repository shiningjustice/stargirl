import React from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import TokenService from '../../services/token-service';
import './Nav.css';

class Nav extends React.Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  condRenderLogOutLink = () => {
    return (
      TokenService.hasAuthToken() && (
        <li className='logout'><Link
            className='resetAnchorStyle'
            onClick={this.handleLogoutClick}
            to='/signin'
          >
            Logout
        </Link></li>
      )
    )
  }

  render () {
    return (
      <nav className="Nav mainContainer">
        <ul className='Nav'>
          <li><Link className='resetAnchorStyle' to='/'><span role="img" aria-label="star emoji">⭐</span></Link></li>
          <li><Link className='resetAnchorStyle' to='/photos'>photos</Link></li>
          <li><Link className='resetAnchorStyle' to='/videos'>videos</Link></li>
          {this.condRenderLogOutLink()}
        </ul>
      </nav>
    )
  }
}

export default Nav;