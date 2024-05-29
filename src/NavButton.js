import "./NavButton.css";
import { Link } from "react-router-dom";

function NavButton({ name, to }) {
  return (
    <Link className="NavButton" to={to}>
      {name}
    </Link>
  );
}

export default NavButton;
