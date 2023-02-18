import "../assets/css/app.css";
import product from "../assets/images/testproduct.webp";

const Products = () => {
  return (
    <>
      <div className="products">
        <div className="products-photo">
        <img src={product} alt="product" />
        </div>
        <p className="products-name">Nombre Producto</p>
        <p className="products-name">$$$</p>
        <p className="products-name">Categoria 1 Categoria 2</p>
      </div>
    </>
  );
};

export default Products;
