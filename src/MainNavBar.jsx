import React, { useState } from "react";
import "./MainNavBar.css"; // Add a CSS file for styling
import Radio from "./Radio"; // Import the Radio component
import Headline from "./Headline"; // Import the Headline component
import Button from "./Button"; // Import the Button component
import ProfileButton from "./ProfileButton"; // Import the ProfileButton component
import ProfileCard from "./ProfileCard"; // Import the ProfileCard component

function MainNavBar() {
  const [isProfileCardVisible, setProfileCardVisible] = useState(false);

  const handleProfileButtonClick = () => {
    setProfileCardVisible((prevState) => !prevState); // Toggle visibility
  };

  return (
    <div className="main-navbar">
      <div className="navbar-left">
        <ProfileButton onClick={handleProfileButtonClick} /> {/* Add the ProfileButton component */}
        {isProfileCardVisible && (
          <div className="profile-card-container">
            <ProfileCard /> {/* Render ProfileCard when visible */}
          </div>
        )}
      </div>
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