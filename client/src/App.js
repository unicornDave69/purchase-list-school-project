import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* Top Section */}
      <div className="header">
        <div className="profile-icon"></div>
      </div>

      {/* Main Circles */}
      <div className="circle-container">
        <div className="circle green">
          <div className="circle-text">
            <h2>ALBERT</h2>
            <p>Táta</p>
          </div>
        </div>

        <div className="circle orange">
          <div className="circle-text">
            <h2>ROSSMANN</h2>
            <p>Máma</p>
          </div>
        </div>
      </div>

      {/* Side Icons */}
      <div className="side-icons">
        <div className="icon add"></div>
        <div className="icon search"></div>
      </div>
    </div>
  );
}

export default App;
