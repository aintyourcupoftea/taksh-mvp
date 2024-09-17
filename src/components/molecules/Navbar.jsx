import React from 'react'
import { SearchIcon } from 'lucide-react'
import TakshLogo from '../../assets/images/taksh Logo.svg';
import "../../styles/navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={TakshLogo} alt="Logo" className="logo" />
        <h1 className="brand">Taksh</h1>
      </div>
      <div className="navbar-center">
        <a href="/map" className="nav-link">Map</a>
        <a href="/login" className="nav-link">Login</a>
      </div>
      <div className="navbar-right">
        <div className="search-container">
          <input type="text" placeholder="Search by keywords... UwU✧" className="search-input" />
          <SearchIcon className="search-icon" />
        </div>
      </div>
    </nav>
  )
}
