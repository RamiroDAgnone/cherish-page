import ProductsContainer from "./ProductsContainer";
import Banner from "./Banner";

const HomePage = () => {
  return (
    <>
      <div className="banner">
        <Banner />
      </div>
      <ProductsContainer />
    </>
  );
};

export default HomePage;
