import "../assets/css/app.css";
import logo from "../assets/images/cherish.png";
import user from "../assets/images/user.png";
import {useNavigate} from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate(); 
  const routeChange = (link) =>{ 
    navigate(link);
  }
  return (
    <>
      <div className="navbar-body">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" primary="Cherish" onClick={(e) => routeChange('/')}/>
        </div>
        <div className="navbar-search">
        <input />
        </div>
        <div className="navbar-user">
          <h5>User </h5>
          <img src={user} alt="user" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
