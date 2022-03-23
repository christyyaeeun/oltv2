import React from "react";
import "../styles/App.css";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header-wrapper">
      <div class="container-fluid" id="nav"></div>
      <small className="heading">our lives together</small>

      <div className="heading-content">
        <button
          onClick={() =>
            handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
          }
          className="toggleMode"
        >
          <img src="toggle-on-solid.svg" alt="" id="toggle-on"></img>
        </button>
       
      </div>
    </div>
  );
};

export default Header;
