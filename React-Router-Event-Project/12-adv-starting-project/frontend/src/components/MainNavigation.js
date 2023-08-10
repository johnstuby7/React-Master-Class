import classes from "./MainNavigation.module.css";

import React from "react";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Events</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
