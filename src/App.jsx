import React from "react";
import "./App.css"; // Assuming this contains your background styles
import MainNavBar from "./MainNavBar"; // Import the MainNavBar component
import SubNavBar from "./SubNavBar"; // Import the SubNavBar component
function App() {
  return (
    <div id="root">
      <MainNavBar /> {/* Add the black strip component here */}
      <SubNavBar /> {/* Add the SubNavBar component here */}
      <div className="content">
      </div>
    </div>
  );
}

export default App;