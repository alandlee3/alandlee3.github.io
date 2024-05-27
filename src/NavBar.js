import NavButton from "./NavButton.js";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="big-name"> Alan Lee</div>
      <NavButton name="Home" to="/" />
      <NavButton name="About" to="/about" />
      <NavButton name="Notes" to="/notes" />
      <NavButton name="Misc" to="/misc" />
    </div>
  );
}

export default NavBar;
