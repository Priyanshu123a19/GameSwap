import React from "react";
import "./MainNavBar.css"; // Add a CSS file for styling
import Radio from "./Radio"; // Import the Radio component
import Headline from "./Headline"; // Import the Headline component
import Button from "./Button"; // Import the Button component

function MainNavBar() {
  return (
    <div className="main-navbar">
      <div className="navbar-center">
        <Radio /> {/* Keep the Radio component in the center */}
      </div>
      <div className="navbar-right">
        <Button /> {/* Add the Button component */}
        <Headline /> {/* Add the Headline component */}
      </div>
    </div>
  );
}

export default MainNavBar;