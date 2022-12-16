import classes from "./Header.module.css";

const Header = (props) => {
  return (
      <header className={classes.header}>
          <h1>My Todo</h1>
      </header>
  )
};

export default Header