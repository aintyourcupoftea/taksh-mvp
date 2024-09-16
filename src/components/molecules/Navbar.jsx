import React from 'react';
import { Link } from 'react-router-dom';
import TakshLogo from '../../assets/images/taksh Logo.jpeg'; 

const Navbar = () => (
  <nav className="bg-gray-800 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="flex items-center">
        <img src={TakshLogo} alt="Taksh Logo" className="h-10 w-auto mr-2 rounded" />
        <span className="text-white font-bold text-xl">Taksh</span>
      </Link>
      <div className="flex items-center">
        <input type="text" placeholder="Search..." className="mr-2 p-1 rounded" />
        <Link to="/map" className="flex items-center">
        <button className="bg-blue-500 text-white mr-2 px-4 py-2 rounded hover:bg-blue-600 transition-colors">
              MAP
          </button>
      </Link>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">Login</button>
      </div>
    </div>
  </nav>
);

export default Navbar;