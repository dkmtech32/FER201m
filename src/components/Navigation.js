import React, { useContext } from 'react';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Menu from '@mui/material';
import { useEffect } from 'react';
import { ThemeContext } from './ThemeContext';
import { Link, NavLink } from 'react-router-dom';
import { Icon } from '@mui/material';

export default function Navigation() {
  const { isEnabled, toggleState } = useContext(ThemeContext);

  useEffect(() => {

    M.AutoInit();
  }, []);
  return (
    <div>
      <div className="navbar-fixed">
        <nav class="nav-extended">
          <div className="nav-wrapper">
            <div class="brand-logo valign-wrapper logo">
              <NavLink to={`/`}>
                <img src='assets/images/logo.png' alt="Logo" />
              </NavLink>
            </div>
            <div className='switch right'>
              <label >
                <input type='checkbox' className='checkbox' checked={isEnabled} onChange={toggleState} />
                <span className='lever'></span>
              </label>
            </div>
            {/* <a href="#" data-target="mobile-menu" className="sidenav-trigger"><Menu /></a> */}
            <ul className="right hide-on-med-and-down">
              <li><NavLink to={`/`}><i class="fa-solid fa-house-chimney left"></i>Home</NavLink></li>
              <li><NavLink to={`news/`}><i class="fa-solid fa-newspaper left"></i>News</NavLink></li>
              <li><NavLink to={`about/`}><i class="fa-solid fa-info left"></i>About</NavLink></li>
              <li><NavLink to={`contact/`}><i class="fa-regular fa-address-card left"></i>Contact</NavLink></li>
            </ul>
          </div>
        </nav>
      </div>

      <ul className="sidenav" id="mobile-menu">
        <li><NavLink to={`/`}><i class="fa-solid fa-house-chimney left"></i>Home</NavLink></li>
        <li><NavLink to={`news/`}><i class="fa-solid fa-newspaper left"></i>News</NavLink></li>
        <li><NavLink to={`about/`}><i class="fa-solid fa-info left"></i>About</NavLink></li>
        <li><NavLink to={`contact/`}><i class="fa-regular fa-address-card left"></i>Contact</NavLink></li>
      </ul>


    </div>
  )

}
