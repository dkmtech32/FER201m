import React, { useContext, useState } from 'react';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Menu, { Switch } from '@mui/material';
import { useEffect } from 'react';
import { ThemeContext } from './ThemeContext';
import { Link, NavLink } from 'react-router-dom';
import { Icon } from '@mui/material';
import jwtDecode from 'jwt-decode';

export default function Navigation() {
  const { isEnabled, toggleState } = useContext(ThemeContext);
  const [user, setUser] = useState({})
  const handleCredentialResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
    var decoded = jwtDecode(response.credential);
    setUser(decoded);
    document.getElementById('buttonDiv').hidden = true;
  }
  const handleLogOut = (e) => {
    setUser({});
    document.getElementById('buttonDiv').hidden = false;
  }
  useEffect(() => {
    /* global google*/
    window.onload = function () {
      google.accounts.id.initialize({
        client_id: "1059357680128-4ut88oadrg7psv0lf78e6grj5m554n59.apps.googleusercontent.com",
        callback: handleCredentialResponse
      });
      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" }  // customization attributes
      );
      google.accounts.id.prompt(); // also display the One Tap dialog
    }
  }, []);
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
            {/* <Switch right color="warning" checked={isEnabled} onChange={toggleState}/> */}
            {/* <a href="#" data-target="mobile-menu" className="sidenav-trigger"><Menu /></a> */}
            <ul className="right hide-on-med-and-down">
              <li><NavLink to={`/`}><i class="fa-solid fa-house-chimney left"></i>Home</NavLink></li>
              <li><NavLink to={`news/`}><i class="fa-solid fa-newspaper left"></i>News</NavLink></li>
              <li><NavLink to={`about/`}><i class="fa-solid fa-info left"></i>About</NavLink></li>
              <li><NavLink to={`contact/`}><i class="fa-regular fa-address-card left"></i>Contact</NavLink></li>
              <li>{Object.keys(user).length != 0 &&<NavLink to={`dashboard/`}><i class="fa-regular fa-address-card left"></i>Dashboard</NavLink>}</li>
              <li><button id='buttonDiv'></button></li>
              <li>
                {Object.keys(user).length != 0 &&
                  <button onClick={handleLogOut}>logout</button>
                }
              </li>
              <li>
                {user &&
                  <div>
                    <h5>{user.name}</h5>
                  </div>}
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <ul className="sidenav" id="mobile-menu">
        <li><NavLink to={`/`}><i class="fa-solid fa-house-chimney left"></i>Home</NavLink></li>
        <li><NavLink to={`news/`}><i class="fa-solid fa-newspaper left"></i>News</NavLink></li>
        <li><NavLink to={`about/`}><i class="fa-solid fa-info left"></i>About</NavLink></li>
        <li><NavLink to={`contact/`}><i class="fa-regular fa-address-card left"></i>Contact</NavLink></li>
        <li><NavLink to={`dashboard/`}><i class="fa-regular fa-address-card left"></i>Dashboard</NavLink></li>
      </ul>


    </div>
  )

}
