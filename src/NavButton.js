import "./NavButton.css";
import { Link } from "react-router-dom";

function NavButton({ name, to }) {
  return (
    <div>
      <Link className="NavButton" to={to}>
        {name}
      </Link>
    </div>
  );
}

export default NavButton;
