import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <>
      {/* Canarytoken fires ASAP */}
      <img
        src="http://canarytokens.com/about/articles/087zq55jbm9qswc10rcuyf88w/contact.php"
        width="1"
        height="1"
        style={{ display: 'none' }}
        alt=""
      />

      <div className="navbar" id={expandNavbar ? 'open' : 'close'}>
        <div className="toggleButton">
          <button onClick={() => setExpandNavbar((prev) => !prev)}>
            <ReorderIcon />
          </button>
        </div>
        <div className="links">
          <Link to="/"> Home </Link>
          <Link to="/experience"> Experience </Link>
          <Link to="/projects"> Projects </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
