import React, { useContext, useState } from "react";
import Dock from "../components/Dock/dock";
import classes from "./mainLayout.module.css";
import { Outlet } from "react-router";
import { ThemeContext } from "../context";
import Avatar from "../assets/images/Dock/nelly.jpg";

const MainLayout = () => {
  const { theme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  return (
    <div className={`${theme === "light" && classes.darkMode} ${classes.main}`}>
      <div className={classes.children}>
        <Outlet />
      </div>
      <div
        className={`${classes.docky} ${theme === "light" && classes.darkMode}`}
      >
        <Dock open={open} setOpen={setOpen} />
        <button onClick={() => setOpen(!open)}>
          <img src={Avatar} alt="avatar" />
          <p>Menu</p>
        </button>
      </div>
    </div>
  );
};

export default MainLayout;
