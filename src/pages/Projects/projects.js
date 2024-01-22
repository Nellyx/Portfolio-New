import classes from "./projects.module.css";
import Card from "../../components/Card/card";
import { data } from "../../constant";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <main className={`${classes.main} ${theme === "light" && classes.darkMode}`}>
      <div className={classes.feature}>
        <h3>Projects</h3>
      </div>
      <div className={classes.cardContainer}>
        {data.map((item, index) => (
          <Card
            heading={item.heading}
            img={item.img}
            link={item.link1}
            skills={item.skills}
            key={index}
          />
        ))}
      </div>
    </main>
  );
};

export default Projects;
