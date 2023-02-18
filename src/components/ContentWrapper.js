import Navbar from "./Navbar";
import BottomNavbar from "./BottomNavbar";
import HomePage from "./HomePage";
import ProductsContainer from "./ProductsContainer";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";

const ContentWrapper = () => {
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="bottom-navbar">
        <BottomNavbar />
      </div>
      <div className="homepage">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vestidos" element={<ProductsContainer />} />
          <Route path="/remeras" element={<ProductsContainer />} />
          <Route path="/polleras" element={<ProductsContainer />} />
          <Route path="/abrigos" element={<ProductsContainer />} />
          <Route path="/pantalones" element={<ProductsContainer />} />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default ContentWrapper;
