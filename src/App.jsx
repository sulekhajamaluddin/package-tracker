//Node modules
import { Routes, Route } from "react-router-dom";

//Project Files
import "./styles/styles.scss";
import { ContentProvider } from "./state/ContentContext";
import { PackagesProvider } from "./state/PackagesContext";
import { NavBar, Footer } from "./components";
import {
  Home,
  About,
  PackageListPage,
  PackageItem,
  PageNotFound,
} from "./pages";

function App() {
  return (
    <ContentProvider>
      <PackagesProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/packages/:parameter" element={<PackageListPage />} />
          <Route path="/packages/:parameter/:id" element={<PackageItem />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </PackagesProvider>
    </ContentProvider>
  );
}

export default App;
