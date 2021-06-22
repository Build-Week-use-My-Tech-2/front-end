import React from "react";

const Footer = () => {
  return (
    <footer>
      <nav>
        <a href="/signup">Copyright © Use My Tech, Inc. All rights reserved </a>
        {new Date().getFullYear()}
      </nav>
    </footer>);
};

export default Footer;
