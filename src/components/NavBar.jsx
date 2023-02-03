//Node Modules
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

//Project Files
import LanguageSelection from "./LanguageSelection";
import { useContent } from "../state/ContentContext";

export default function NavBar() {
  const { content } = useContent();
  const { navlinkaboutus } = content;

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <FontAwesomeIcon className="logo" icon={solid("location-dot")} />
      </Link>
      <div>
        <Link to="/about">{navlinkaboutus}</Link>
        <LanguageSelection />
      </div>
    </nav>
  );
}
