import "../assets/css/app.css";
import Products from "./Products";

const VestidosContainer = () => {
  let nombre
  console.log(window.location.pathname);
    if (window.location.pathname !== "/") {
      nombre = window.location.pathname 
    nombre = nombre.replace("/","")
    }else{
      nombre = "promociones"
    }
    

  return (
    <>
    <h1>{nombre}</h1>
      <div className="products-container">
        <Products />
        <Products />
        <Products />
        <Products />
      </div>
    </>
  );
};

export default VestidosContainer;