import React from 'react'
import '@fortawesome/react-fontawesome';
import '@fortawesome/free-solid-svg-icons';
export default function Footer() {
  return (
<footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <h3>About Us</h3>
            <p>We are Football Stars Inc., a leading provider of football news and analysis. Our team of experts includes former players, coaches, and journalists who bring you the latest insights and opinions from the world of football.</p>
          </div>
          <div className='col-md-4'>
            <h3>Quick Links</h3>
            <ul>
              <li><a href=''>Home</a></li>
              <li><a href=''>News</a></li>
              <li><a href=''>About Us</a></li>
              <li><a href=''>Contact Us</a></li>
            </ul>
          </div>
          <div className='col-md-4'>
            <h3>Connect With Us</h3>
            <ul className='social-media'>
              <li><a href='#'><i className='fab fa-facebook'></i></a></li>
              <li><a href='#'><i className='fab fa-twitter'></i></a></li>
              <li><a href='#'><i className='fab fa-instagram'></i></a></li>
              <li><a href='#'><i className='fab fa-youtube'></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>  )
}
