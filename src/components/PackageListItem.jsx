//Node Modules
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

//Project Files
import { useContent } from "../state/ContentContext";

export default function PackageListItem({ packageId }) {
  const { content } = useContent();
  const { packageID: packageIdLabel } = content;

  return (
    <div className="package-list-item">
      {`${packageIdLabel} :`}
      <span>{packageId}</span>
      <Link to={`/packages/:parameter/${packageId}`}>
        <FontAwesomeIcon className="icon" icon={solid("arrow-right")} />
      </Link>
    </div>
  );
}
