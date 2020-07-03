import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigarion = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Notes App
        </Link>
        <button
          className="navbar-toggler"
          onClick={toggleShowMenu}
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse${showMenu ? ' show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active" onClick={toggleShowMenu}>
              <Link className="nav-link" to="/">
                Notes <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item" onClick={toggleShowMenu}>
              <Link className="nav-link" to="/create">
                Create Note
              </Link>
            </li>
            <li className="nav-item" onClick={toggleShowMenu}>
              <Link className="nav-link" to="/user">
                Create User
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigarion;
