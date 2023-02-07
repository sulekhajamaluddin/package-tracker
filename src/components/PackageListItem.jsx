//Node Modules
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

//Project Files
import { useContent, usePackages } from "../state";
import { type } from "@testing-library/user-event/dist/type";

export default function PackageListItem({ packageId }) {
  const { content } = useContent();
  const { packageID: packageIdLabel } = content;
  const { packages } = usePackages();

  const selectedPackage = packages.find((item) => item.parcel_id === packageId);

  return (
    <div className="package-list-item">
      <div className="content">
        <span className="big">{selectedPackage.sender}</span>
        <span>{selectedPackage.status}</span>
      </div>
      <Link to={`/packages/:parameter/${packageId}`}>
        <span className="icon-holder">
          <FontAwesomeIcon className="icon" icon={solid("arrow-right")} />
        </span>
      </Link>
    </div>
  );
}
