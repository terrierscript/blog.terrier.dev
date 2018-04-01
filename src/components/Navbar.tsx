import React, { SFC } from "react";
import Link from "gatsby-link";

const Navbar: SFC<{}> = () => (
  <nav>
    <Link to="/" className="navbar-item">
      <figure className="image">Today 🐶 Learned</figure>
    </Link>
  </nav>
);

export default Navbar;
