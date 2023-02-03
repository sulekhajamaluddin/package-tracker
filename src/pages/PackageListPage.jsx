// Node modules
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

//Project Files
import orders from "../assets/images/orders.png";
import { PackageListItem, Loader } from "../components";
import { Error, EmptyList } from "./index";
import { useContent, usePackages } from "../state/index.js";
import { loadPackages } from "../services/packageService";

export default function PackageListPage() {
  //  Global state
  const { parameter: phoneNumber } = useParams();
  const { content } = useContent();
  const { packages, setPackages } = usePackages();

  // Local State
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPackages(setError, setLoading, setPackages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <Loader />;
  if (error) return <Error />;

  const packagesList = packages?.filter(
    (item) => item.user_phone === phoneNumber
  );

  const packageItem = packagesList?.map((item) => (
    <PackageListItem
      key={item.id}
      packageId={item.parcel_id}
      packages={packages}
    />
  ));
  if (packagesList.length === 0) return <EmptyList />;

  return (
    <div id="package-list">
      <img className="hero" src={orders} alt="Some packages" />
      <h1>{content.yourOrders}</h1>
      {packageItem}
    </div>
  );
}
