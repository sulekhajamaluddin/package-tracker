// Node modules
import { useParams } from "react-router-dom";

//Project Files
import truck from "../assets/images/truck.png";
import { useContent, usePackages } from "../state";
import LocationMap from "../components/LocationMap";
import { getDate, getTime, createPackageObject, getStatusState } from "./utils";

export default function PackageItem() {
  const { id } = useParams();
  const { content } = useContent();
  const { packages } = usePackages();

  const selectedPackage = packages.filter((item) => item.parcel_id === id)[0];
  const formattedDate = getDate(selectedPackage);
  const formattedTime = getTime(selectedPackage);
  const packageObject = createPackageObject(selectedPackage);
  const statusState = getStatusState(selectedPackage);

  return (
    <div className="package-item">
      <img src={truck} alt="A blue truck" />
      <div className="header">
        <p className="package-id">Package ID : {packageObject.packageID}</p>
        <h1>{packageObject.status}</h1>
      </div>
      {statusState === "coming" && (
        <p>{`The package is expected to reach on ${formattedDate} ${formattedTime} hours`}</p>
      )}
      {statusState === "ready" && (
        <p>{`The package is ready for pick up. Please make sure to collect the package within 7 days.`}</p>
      )}
      {statusState === "delivered" && (
        <p>{`The package has been delivered on ${formattedDate}`}</p>
      )}
      <div className="info">
        <span>User : {packageObject.user}</span>
        <span>Sender : {packageObject.sender}</span>
        <span>Location : {packageObject.location}</span>
        <span>Notes : {packageObject.notes}</span>
        <span>Verification Required : {packageObject.verification}</span>
      </div>

      <LocationMap
        className="map"
        latitude={selectedPackage.location_coordinate_latitude}
        longitude={selectedPackage.location_coordinate_longitude}
      />
    </div>
  );
}
