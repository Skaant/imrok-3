import React from "react";
import TagsAndCount from "../_models/TagsAndCount.type";

function Navbar() {
  return (
    <nav
      id="navbar"
      className="p-4 d-flex justify-content-between align-items-center"
    >
      <a className="marker" href="/">
        IMROK
      </a>
    </nav>
  );
}

export default Navbar;
