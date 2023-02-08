//Project Files
import emptyBox from "../assets/images/empty-box.png";
import { useTranslation } from "../state/TranslationContext";

export default function EmptyList() {
  const { content } = useTranslation();
  const { empty } = content;

  return (
    <div className="empty-list">
      <img src={emptyBox} alt="A few packages and one empty" />
      <p>{empty}</p>
    </div>
  );
}
