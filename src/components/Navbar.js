import React from "react";

function Navbar() {
  return (
    <>
      <nav>
        <img
          src={require("./image/Airbnb.png")}
          alt="airbnb logo"
          className="nav--logo"
        ></img>
      </nav>
    </>
  );
}

export default Navbar;
