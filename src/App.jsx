//Node modules
import { Routes, Route } from "react-router-dom";

//Project Files
import "./styles/styles.scss";
import { ContentProvider } from "./state/ContentContext";
import { PackagesProvider } from "./state/PackagesContext";
import { NavBar, Footer } from "./components";
// I don't like this import style, it forces you to go vertical in the formatting.
// Do 1 import per page
import {
  Home,
  About,
  PackageListPage,
  PackageItem,
  PageNotFound,
} from "./pages";

// do 1 line export -1
function App() {
  return (
    // good
    <ContentProvider>
      <PackagesProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* what is parameter? is there multiple users in this API? */}
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
