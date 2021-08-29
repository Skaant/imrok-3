import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md text-white">
      <div className="container-fluid justify-content-between">
        <a className="navbar-brand marker" href="/">
          IMROK
        </a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
      </div>
    </nav>
  );
}

export default Navbar;
