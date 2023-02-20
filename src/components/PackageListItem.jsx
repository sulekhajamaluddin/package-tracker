//Node Modules
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

//Project Files
import { usePackages } from "../state";

export default function PackageListItem({ packageId }) {
  const { packages } = usePackages();

  const selectedPackage = packages.find((item) => item.id === packageId);

  return (
    <div className="package-list-item">
      <div className="content">
        <span className="big">{selectedPackage.sender}</span>
      </div>
      <Link to={`/packages/${packageId}`}>
        <span className="icon-holder">
          <FontAwesomeIcon className="icon" icon={solid("arrow-right")} />
        </span>
      </Link>
    </div>
  );
}
