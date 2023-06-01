import React from 'react';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { Menu } from "@material-ui/icons";
import { useEffect } from 'react';


export default function Navigation() {
  useEffect(() => {

    M.AutoInit();
  }, []);
  return (
    <div>
      <div className="navbar-fixed">
        <nav class="nav-extended">
          <div className="nav-wrapper">
            <a href="" class="brand-logo valign-wrapper logo">
              <img src='assets/images/logo.png' alt="Logo" />
            </a>

            <a href="#" data-target="mobile-menu" className="sidenav-trigger"><Menu /></a>
            <ul className="right hide-on-med-and-down">
              <li><a className="active" href="#home">Home</a></li>
              <li><a href="#news">News</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>

      <ul className="sidenav" id="mobile-menu">
        <li><a className="active" href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  )

}
