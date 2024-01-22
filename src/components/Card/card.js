import { useContext } from "react";
import classes from "./card.module.css";
import { ThemeContext } from "../../context";

const Card = ({ heading, img, skills, link }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${classes.card} ${theme === "light" && classes.darkMode}`}>
      <p>{heading}</p>
      <div className={classes.image}>
        <img src={img} alt="" />
      </div>
      <div className={classes.link}>
        <span>{skills}</span>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Visit &#8674;
        </a>
      </div>
    </div>
  );
};

export default Card;
