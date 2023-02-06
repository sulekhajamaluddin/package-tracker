//Project Files
import emptyBox from "../assets/images/empty-box.png";
import { useContent } from "../state/ContentContext";

export default function EmptyList() {
  const { content } = useContent();
  const { emptyOne, emptyTwo } = content;

  return (
    <div className="empty-list">
      <img src={emptyBox} alt="A few packages and one empty" />
      {/* format -1 */}
      {/* don't use br to separate a paraghaph, use another <p>  */}
      <p>
        {emptyOne} <br />
        {emptyTwo}
      </p>
    </div>
  );
}
