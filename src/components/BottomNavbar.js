import "../assets/css/app.css";
import { useNavigate } from "react-router-dom";

const BottomNavbar = () => {
  let navigate = useNavigate();
  const routeChange = (link) => {
    navigate(link);
  };
  return (
    <>
      <div className="bottom-navbar-categories">
      <ul>
      <li primary="Vestidos" onClick={(e) => routeChange("/vestidos")}>Vestidos </li>
      <li primary="Remeras" onClick={(e) => routeChange("/remeras")}>Remeras </li>
      <li primary="Polleras" onClick={(e) => routeChange("/polleras")}>Polleras </li>
      <li primary="Abrigos" onClick={(e) => routeChange("/abrigos")}>Abrigos </li>
      <li primary="Pantalones" onClick={(e) => routeChange("/pantalones")}>Pantalones </li>
      </ul>
      </div>
    </>
  );
};

export default BottomNavbar;
