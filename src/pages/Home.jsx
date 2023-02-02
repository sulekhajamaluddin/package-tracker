//Node Modules
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

//Project Files
import { useContent } from "../state/ContentContext";

export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { content } = useContent();
  const { labelMobileNumber, example } = content;

  return (
    <div id="home">
      <div className="hero"></div>
      <div className="container">
        <div className="input-container">
          <label htmlFor="phoneNumber">{labelMobileNumber}</label>
          <div>
            <input
              type={"text"}
              required
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Link to={`/packages/${phoneNumber}`}>
              <FontAwesomeIcon
                className="icon"
                icon={solid("magnifying-glass")}
              />
            </Link>
            <span className="example">{example}: +46 729478015 </span>
          </div>
        </div>
        <h1>INSTA</h1>
        <span className="tracker">TRACKER</span>
      </div>
    </div>
  );
}
