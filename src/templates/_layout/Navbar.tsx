import React from "react";
import TagsAndCount from "../_models/TagsAndCount.type";

function Navbar({ tagsAndCount }: { tagsAndCount?: TagsAndCount }) {
  return (
    <nav
      id="navbar"
      className="p-4 d-flex justify-content-between align-items-center"
    >
      <a className="marker" href="/">
        IMROK
      </a>
      <ul className="d-flex mb-0">
        {Object.entries(tagsAndCount)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 8)
          .map(([tag, count]) => (
            <li key={tag}>
              <a
                className="badge-md badge-light mx-1 rounded-pill"
                href={`/tags/${tag}`}
              >
                {tag} ({count})
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default Navbar;
