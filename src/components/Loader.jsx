//Node Modules
import ClockLoader from "react-spinners/ClockLoader";

//Project Files
import { useContent } from "../state/ContentContext";

export default function Loader() {
  const { content } = useContent();
  const { loadingOne, loadingTwo } = content;

  return (
    <div className="loader">
      <span>Tic Toc Tic Toc Tic......</span>
      <ClockLoader
        color={"#f37a24"}
        loading={true}
        size={200}
        aria-label="Loading Spinner"
      />
      <p>
        {loadingOne}
        <br />
        {loadingTwo}
      </p>
    </div>
  );
}
