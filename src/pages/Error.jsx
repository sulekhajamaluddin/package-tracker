//Project Files
import error from "../assets/images/sun.png";
import { useContent } from "../state/ContentContext";

export default function Error() {
  const { content } = useContent();
  const { weather, tryAgain } = content;
  return (
    <div className="error-page">
      <img src={error} alt="Rain and sad sun" />
      <p>
        Oooops!!! <br />
        {weather}
        <br />
        {tryAgain}
      </p>
    </div>
  );
}
