import { useState, useEffect } from "react";
//Project Files
import orders from "../assets/images/orders.png";
import { PackageListItem } from "../components";
import { useTranslation, usePackages } from "../state/index.js";
import { Loader } from "../components";
import { Error } from "../pages";

import { loadPackages } from "../services/packageService";

export default function PackageListPage() {
  //  Global state
  const { content } = useTranslation();
  const { packages } = usePackages();

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setPackages } = usePackages();

  useEffect(() => {
    loadPackages(setError, setLoading, setPackages);
    console.log("Inside useEffect");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <Loader />;
  if (error) return <Error />;

  const packageItem = packages?.map((item) => (
    <PackageListItem
      key={item.id}
      packageId={item.parcel_id}
      packages={packages}
    />
  ));

  return (
    <div id="package-list">
      <img className="hero" src={orders} alt="Some packages" />
      <h1>{content.your_orders}</h1>
      {packageItem}
    </div>
  );
}
