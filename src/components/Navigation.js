import React from 'react';


export default function Navigation() {
  return (
    <div className="nav-container">
      <nav>
        
        <ul>
        <img src='assets/images/logo.png' alt="Logo" className="logo" />
          <li><a className='active' href='#home'>Home</a></li>
          <li><a href='#news'>News</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}
