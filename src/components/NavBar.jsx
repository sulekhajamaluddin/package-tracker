//Node Modules
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

//Project Files
import LanguageSelection from "./LanguageSelection";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <FontAwesomeIcon className="logo" icon={solid("location-dot")} />
      </Link>
      <LanguageSelection />
    </nav>
  );
}
