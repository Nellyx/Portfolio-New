import { Link } from "react-router-dom";
import {
  Dark,
  Home,
  LinkedIn,
  Mail,
  Projects,
  Resume,
  Twitter,
} from "../../constant/svgs";
import classes from "./dock.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import Avatar from "../../assets/images/Dock/nelly.jpg";
import Cv from "../../assets/page 1.pdf";
import GithubLight from "../../assets/images/Dock/github-light.png";

const Dock = ({ open, setOpen }) => {
  const { setTheme, theme } = useContext(ThemeContext);
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    setOpen(false);
  };

  return (
    <div
      className={`${classes.container} ${
        theme === "light" && classes.darkMode
      } ${open && classes.open} `}
    >
      <div className={classes.circle} onClick={() => setOpen(false)}>
        <img src={Avatar} alt="avatar" />
        <span>Close</span>
      </div>
      <span className={classes.line}></span>
      <Link to="/" className={classes.home} onClick={() => setOpen(false)}>
        <p>Home</p>
        <Home />
      </Link>
      <Link
        to="/projects"
        className={classes.projects}
        onClick={() => setOpen(false)}
      >
        <p>Projects</p>
        <Projects />
      </Link>
      <a
        className={classes.github}
        href="https://github.com/Nellyx"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>GitHub</p>
        <img src={GithubLight} alt="GitHub" />
      </a>
      <a
        className={classes.linkedIn}
        href="https://www.linkedin.com/in/nelson-michael-085789206/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>LinkedIn</p>
        <LinkedIn />
      </a>

      <a
        className={classes.mail}
        href="mailto:neilsonmike14@gmail.com?subject=Hi%Michael&body=I%20saw%20your%20portfolio%20"
        rel="noopener noreferrer"
      >
        <p>Mail</p>
        <Mail />
      </a>
      <a href={Cv} download>
        <p>Resume</p>
        <Resume />
      </a>
      <span className={classes.line}></span>
      <div className={classes.dark} onClick={toggleTheme}>
        <p>{theme === "dark" ? "Light" : "Dark"}</p>
        <Dark />
      </div>
    </div>
  );
};

export default Dock;
