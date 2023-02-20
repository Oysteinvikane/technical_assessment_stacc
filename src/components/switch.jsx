import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Darkmode from "./darkmode";

export default function Switch() {
  const [colorTheme, setTheme] = Darkmode();
  const [darkmode, setDarkmode] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkmode(checked);
  };

  return (
    <>
      <DarkModeSwitch
        style={{ marginBottom: "2rem", marginTop: "2rem" }}
        checked={darkmode}
        onChange={toggleDarkMode}
        size={20}
      />
    </>
  );
}
