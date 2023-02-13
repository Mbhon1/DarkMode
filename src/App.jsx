import Navbar from "./components/Navbar";
import Main from "./components/Main";
import React, { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState({
    isOn: false,
  });

  function handleChange() {
    setDarkMode((prevState) => ({
      ...prevState,
      isOn: !prevState.isOn,
    }));
  }

  return (
    <div className="container">
      <Navbar toggleDarkMode={handleChange} darkMode={darkMode.isOn} />
      <Main darkMode={darkMode.isOn} />
    </div>
  );
}

export default App;
