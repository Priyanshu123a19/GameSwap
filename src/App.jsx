import React from "react";
import "./App.css"; // Assuming this contains your background styles
import MainNavBar from "./MainNavBar"; // Import the MainNavBar component

function App() {
  return (
    <div id="root">
      <MainNavBar /> {/* Add the black strip component here */}
      <div className="content">
      </div>
    </div>
  );
}

export default App;