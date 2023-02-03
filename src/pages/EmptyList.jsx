//Project Files
import emptyBox from "../assets/images/empty-box.png";
import { useContent } from "../state/ContentContext";

export default function EmptyList() {
  const { content } = useContent();
  const { emptyOne, emptyTwo } = content;

  return (
    <div className="empty-list">
      <img src={emptyBox} alt="A few packages and one empty" />
      <p>
        {emptyOne} <br />
        {emptyTwo}
      </p>
    </div>
  );
}
