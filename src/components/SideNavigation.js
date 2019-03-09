import React from "react";
import { bubble as Menu } from "react-burger-menu";
import { Link } from "gatsby"
import "../../static/main.css"

export default props => {
  return (
    <Menu>
      <Link className="link" activeClassName="active-class" to={`/`}>home</Link>
      <Link className="link" activeClassName="active-class" to={`/blog`}>blog</Link>
      <Link className="link" activeClassName="active-class" to={`/talks`}>talks</Link>
      <a className="link" href="https://i-can-not-react.netlify.com/">i-can-not-react</a>
    </Menu>
  );
};