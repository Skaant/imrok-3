import React from "react";
import TagsAndCount from "../_models/TagsAndCount.type";

function Navbar({ tagsAndCount }: { tagsAndCount?: TagsAndCount }) {
  return (
    <nav className="navbar navbar-expand-md text-white">
      <div className="container-fluid justify-content-between">
        <a className="navbar-brand marker" href="/">
          IMROK
        </a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {Object.entries(tagsAndCount)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 8)
            .map(([tag, count]) => (
              <li key={tag}>
                <a
                  className="badge mx-1 rounded-pill bg-white text-primary"
                  href={`/tags/${tag}`}
                >
                  {tag}
                  {count}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
