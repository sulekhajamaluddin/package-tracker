//Node modules
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

//Project Files
import "./styles/styles.scss";
import { NavBar, Footer, Loader } from "./components";
import {
  Home,
  PackageListPage,
  PackageItem,
  PageNotFound,
  Error,
} from "./pages";
import { usePackages } from "./state";

import { loadPackages } from "./services/packageService";

export default function App() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setPackages } = usePackages();

  useEffect(() => {
    loadPackages(setError, setLoading, setPackages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <Loader />;
  if (error) return <Error />;

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages/" element={<PackageListPage />} />
        <Route path="/packages/:packageId" element={<PackageItem />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
