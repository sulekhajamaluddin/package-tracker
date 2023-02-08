//Project Files
import error from "../assets/images/sun.png";
import { useTranslation } from "../state/TranslationContext";

export default function Error() {
  const { content } = useTranslation();
  const { error_message } = content;
  return (
    <div className="error-page">
      <img src={error} alt="Rain and sad sun" />
      <p>Oooops!!!</p>
      <p>{error_message}</p>
    </div>
  );
}
