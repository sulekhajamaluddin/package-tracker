//Project Files
import { useEffect } from "react";
import orders from "../assets/images/orders.png";
import { PackageListItem } from "../components";
import { useTranslation, usePackages } from "../state/index.js";

export default function PackageListPage() {
  //  Global state
  const { content } = useTranslation();
  const { packages } = usePackages();

  const packageItem = packages?.map((item) => (
    <PackageListItem
      key={item.id}
      packageId={item.parcel_id}
      packages={packages}
    />
  ));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="package-list">
      <img className="hero" src={orders} alt="Some packages" />
      <h1>{content.your_orders}</h1>
      {packageItem}
    </div>
  );
}
