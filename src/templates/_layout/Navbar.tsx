import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-primary">
      <div className="container-fluid justify-content-between">
        <a className="navbar-brand" href="/">
          IMROK
        </a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" href="/blog">
              Articles
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/blog">
              Pensées
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/blog">
              Images
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/blog">
              Videos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
