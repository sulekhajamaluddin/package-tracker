//Node Modules
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

//Project Files
import { useTranslation } from "../state";

export default function Home() {
  const navigate = useNavigate();
  const { content } = useTranslation();

  return (
    <div id="home">
      <section className="hero">{/*Empty on purpose*/}</section>
      <section className="container">
        <h1 className="welcome-message">{content.welcome_message}</h1>
        <button className="view-button" onClick={() => navigate("/packages")}>
          {content.view_packages}{" "}
          <FontAwesomeIcon className="icon" icon={solid("arrow-right")} />
        </button>
        <span className="insta">INSTA</span>
        <span className="tracker">TRACKER</span>
      </section>
    </div>
  );
}
