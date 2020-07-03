import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/" onClick={() => setShowMenu(false)}>
        React-GraphQL
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" onClick={toggleShowMenu}></span>
      </button>
      <div
        className={`collapse navbar-collapse${showMenu ? ' show' : ''}`}
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={toggleShowMenu}>
              Messages
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/new-message"
              onClick={toggleShowMenu}
            >
              New Message
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
