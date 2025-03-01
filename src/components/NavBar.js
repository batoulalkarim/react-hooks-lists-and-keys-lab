import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const anchorTag = links.map((link) => (
    <a key={link} href={"#" + link}>{link}</a>
  ))
    return <nav>
      {anchorTag}
      
      </nav>;
  
}

export default NavBar;
