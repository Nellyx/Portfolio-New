import classes from "./landing.module.css";

const Landing = () => {
  return (
    <>
      <main className={` ${classes.main}`}>
        <div className={`${classes.container}`}>
          <h1 className="center t-bg mb-md">
            I'm Nelson Michael, a frontend developer from Lagos Nigeria.
          </h1>
          <p className="center t-md">
            Enthusiastic about creating great solutions for clients, I enjoy
            coding to make things work better, faster, or easier. I make sure
            the product keeps getting better over time, so it works at its best
            and makes clients really happy.
          </p>
        </div>
      </main>
    </>
  );
};

export default Landing;
