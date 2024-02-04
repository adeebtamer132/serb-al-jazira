import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./Home";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";
import ProductsPage from "./components/ProductsPage/ProductsPage.jsx";
import ProductPage from "./components/ProductPage/ProductPage.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage.jsx";
import CyberSecurity from "./Pages/AboutUsPage/cyberSecurityPage/CyberSecurity.jsx";
export default function App() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <HashRouter>
        <div className="bg-primary-black ">
          <Navbar />
        </div>
        <ScrollToTop />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/pages/:slug" element={<CyberSecurity />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <div className=" relative bg-primary-black overflow-hidden ">
          <Footer />
        </div>
      </HashRouter>
    </div>
  );
}