import React from "react";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
function Theme({ themeType, setLightTheme, setDarkTheme }) {
  const toggleTheme = () => {
    if (themeType === "vs-light") {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  };

  return (
    <div className="">
      <button
        onClick={toggleTheme}
        className="px-2 py-1 mx-2 h-full border border-blue-500 shadow rounded-lg hover:bg-blue-900 hover:text-gray-200"
      >
        {themeType === "vs-light" ? <BrightnessHighIcon /> : <NightsStayIcon />}
      </button>
    </div>
  );
}

export default Theme;
