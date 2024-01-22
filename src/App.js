import "./globals/utilities.css";
import "./globals/typography.css";
import "./globals/darkmode.css";

import { useState, useEffect } from "react";
import Router from "./router";
import { ThemeContext } from "./context";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Router />
    </ThemeContext.Provider>
  );
};

export default App;
