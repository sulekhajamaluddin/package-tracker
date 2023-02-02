// Node modules
import { useParams } from "react-router-dom";

//Project Files
import truck from "../assets/images/truck.png";
import { useContent } from "../state/ContentContext";
import { usePackages } from "../state/PackagesContext";
import LocationMap from "../components/LocationMap";

export default function PackageItem() {
  const { id } = useParams();
  const { content } = useContent();
  const { packages } = usePackages();

  const selectedPackage = packages.filter((item) => item.parcel_id === id);
  console.log(selectedPackage);

  return (
    <div className="package-item">
      <img src={truck} alt="A blue truck" />
      <h1>{`Parcel ID : ${selectedPackage[0].parcel_id}`}</h1>
      <h2>{`${content.status} : ${selectedPackage[0].status}`}</h2>
      <p>{`User : ${selectedPackage[0].user_name}`}</p>
      <p>{`Estimated Date of Delivery : ${selectedPackage[0].eta.slice(
        0,
        10
      )}`}</p>
      <p>{`Estimated Time of Delivery : ${selectedPackage[0].eta.slice(
        11,
        19
      )}`}</p>
      <p>{`Location : ${selectedPackage[0].location_name}`}</p>
      <p>{`Sender : ${selectedPackage[0].sender}`}</p>
      <LocationMap
        latitude={selectedPackage[0].location_coordinate_latitude}
        longitude={selectedPackage[0].location_coordinate_longitude}
      />
    </div>
  );
}
