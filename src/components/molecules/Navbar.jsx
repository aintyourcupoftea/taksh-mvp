// import React from 'react';
// import { Link } from 'react-router-dom';
// import TakshLogo from '../../assets/images/taksh Logo.jpeg'; 

// const Navbar = () => (
//   <nav className="bg-gray-800 p-4">
//     <div className="container mx-auto flex justify-between items-center">
//       <Link to="/" className="flex items-center">
//         <img src={TakshLogo} alt="Taksh Logo" className="h-10 w-auto mr-2 rounded" />
//         <span className="text-white font-bold text-xl">Taksh</span>
//       </Link>
//       <div className="flex items-center">
//         <input type="text" placeholder="Search..." className="mr-2 p-1 rounded" />
//         <Link to="/map" className="flex items-center">
//         <button className="bg-blue-500 text-white mr-2 px-4 py-2 rounded hover:bg-blue-600 transition-colors">
//               MAP
//           </button>
//       </Link>
//         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">Login</button>
//       </div>
//     </div>
//   </nav>
// );

// export default Navbar;


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
        <a href="#map" className="nav-link">Map</a>
        <a href="#login" className="nav-link">Login</a>
      </div>
      <div className="navbar-right">
        <div className="search-container">
          <input type="text" placeholder="Search by keywords... ( •̀ ω •́ )✧" className="search-input" />
          <SearchIcon className="search-icon" />
        </div>
      </div>
    </nav>
  )
}
