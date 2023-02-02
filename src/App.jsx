//Node modules
import { Routes, Route } from "react-router-dom";

//Project Files
import "./styles/styles.scss";
import { ContentProvider } from "./state/ContentContext";
import { PackagesProvider } from "./state/PackagesContext";
import { NavBar } from "./components";
import { Home, PackageListPage, PackageItem, PageNotFound } from "./pages";

function App() {
  return (
    <ContentProvider>
      <PackagesProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages/:parameter" element={<PackageListPage />} />
          <Route path="/packages/:parameter/:id" element={<PackageItem />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </PackagesProvider>
    </ContentProvider>
  );
}

export default App;
