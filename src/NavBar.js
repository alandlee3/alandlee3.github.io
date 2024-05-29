import NavButton from "./NavButton.js";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand big-name" href="/">
            Alan Lee
          </a>
        </div>
      </div>
      <div className="my-navbar">
        <NavButton name="Home" to="/" />
        <NavButton name="About" to="/about" />
        <NavButton name="Notes" to="/notes" />
        <NavButton name="Game" to="/game" />
        <NavButton name="Projects" to="/projects" />
      </div>
    </div>
  );
}

export default NavBar;
