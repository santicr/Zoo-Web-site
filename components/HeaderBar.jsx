import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderBar.css';

class HeaderBar extends Component {
  render() {
    return(
      <nav className='navbar navbar-expand-md navbar-light bg-light sticky-top '>
        <div className='navbar-brand'> <img src="https://static.wixstatic.com/media/8fa6bb_378aa4f4944c4a05bff12d30bd1c6c5e~mv2.png/v1/fill/w_320,h_148,al_c,q_85,usm_0.66_1.00_0.01/8fa6bb_378aa4f4944c4a05bff12d30bd1c6c5e~mv2.webp"></img></div>

        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <div className="nav-link">
              <Link id = "an" class = "txt" to='/' style={{color: 'black'}} activeStyle={{color: 'red'}}>
                Animales
              </Link>
              
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link">
              <Link id = "qs" class = "txt" to='/who' style={{color: 'black'}} activeStyle={{color: 'red'}}>
                ¿Quienes somos?
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

export default HeaderBar;