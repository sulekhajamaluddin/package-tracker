// Node modules
import { useParams } from "react-router-dom";

//Project Files
import truck from "../assets/images/truck.png";
import { useContent, usePackages } from "../state";
import LocationMap from "../components/LocationMap";
import { getInfoObj, getState, getMessage } from "./utils";

export default function PackageItem() {
  const { id } = useParams();
  const { content } = useContent();
  const { packages } = usePackages();
  const { packageID } = content;

  const selectedPackage = packages.filter((item) => item.parcel_id === id)[0];
  const { parcel_id, status } = selectedPackage;
  const currentState = getState(selectedPackage);
  const message = getMessage(currentState, selectedPackage, content);
  const infoObject = getInfoObj(selectedPackage, content);

  const information = Object.keys(infoObject).map((key) => (
    <span key={key}>
      {key} : {infoObject[key]}
    </span>
  ));

  return (
    <div className="package-item">
      <img src={truck} alt="A blue truck" />
      <section className="header">
        <p className="package-id">
          {packageID} : {parcel_id}
        </p>
        <h1>{status}</h1>
      </section>
      <p>{message}</p>
      <section className="info">{information}</section>
      <section className="map-container">
        <LocationMap
          className="map"
          latitude={selectedPackage.location_coordinate_latitude}
          longitude={selectedPackage.location_coordinate_longitude}
        />
      </section>
    </div>
  );
}
