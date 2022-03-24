import React from "react";
import "../styles/App.css";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div class="container-fluid" id="nav">
      <div className="header-wrapper">
        <small className="heading">our lives together</small>
        <div className="heading-content">
          <span>
            <button
              onClick={() =>
                handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
              }
              className="toggleMode"
            >
              <img src="toggle-on-solid.svg" alt="" id="toggle-on"></img>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
