//Node Modules
import ClockLoader from "react-spinners/ClockLoader";

//Project Files
import { useTranslation } from "../state";

export default function Loader() {
  const { content } = useTranslation();
  return (
    <div className="loader">
      <span>{content.hello}</span>
      <ClockLoader
        color={"#f37a24"}
        loading={true}
        size={200}
        aria-label="Loading Spinner"
      />
      <p>{content.loading}</p>
    </div>
  );
}
