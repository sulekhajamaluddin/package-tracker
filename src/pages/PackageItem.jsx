// Node modules
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

//Project Files
import { usePackages, useTranslation } from "../state";
import LocationMap from "../components/LocationMap";
import { EmptyList } from "../pages";
import { getInfoObj, getState, getMessage } from "./utils";

export default function PackageItem() {
  const navigate = useNavigate();
  const { packageId } = useParams();
  const { content } = useTranslation();
  const { packages } = usePackages();

  const selectedPackage = packages.filter(
    (item) => item.id === Number(packageId)
  )[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!selectedPackage) return <EmptyList />;

  const { id, status } = selectedPackage;
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
      <div className={currentState}></div>
      <section className="header">
        <p className="package-id">
          {content.package_id} : {id}
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
      <button className="back" onClick={() => navigate("/packages")}>
        Go Back
      </button>
    </div>
  );
}
