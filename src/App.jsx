//Node modules
import { Routes, Route } from "react-router-dom";

//Project Files
import "./styles/styles.scss";
import { NavBar, Footer } from "./components";
import { Home, PackageListPage, PackageItem, PageNotFound } from "./pages";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages/" element={<PackageListPage />} />
        <Route path="/packages/:id" element={<PackageItem />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
