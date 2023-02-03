//Node Modules
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

//Project Files
import { useContent } from "../state/ContentContext";
import { getErrors, setMessages } from "./utils";

export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  const { content } = useContent();
  const { labelMobileNumber, example, placeHolder } = content;

  const [errors, setErrors] = useState({});
  const [isValid, setisValid] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    const errors = getErrors(phoneNumber);
    const isValid = Object.keys(errors).length === 0;
    if (isValid) {
      navigate(`/packages/${phoneNumber}`);
    } else {
      setErrors(errors);
      setisValid(false);
    }
  }

  return (
    <div id="home">
      <section className="hero">{/*Empty on purpose*/}</section>
      <section className="container">
        <form className="input-container">
          <label htmlFor="phoneNumber">{labelMobileNumber}</label>
          <div>
            <input
              type={"text"}
              placeholder={`${placeHolder}`}
              onChange={(e) => setPhoneNumber(e.target.value.trim())}
            />
            <button type="submit" onClick={(e) => handleSubmit(e)}>
              <FontAwesomeIcon
                className="icon"
                icon={solid("magnifying-glass")}
              />
            </button>
            <span className="example">{example}: +46 729478015 </span>
            {!isValid && setMessages(errors)}
          </div>
        </form>
        <h1>INSTA</h1>
        <span className="tracker">TRACKER</span>
      </section>
    </div>
  );
}
