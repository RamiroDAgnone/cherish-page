import "../assets/css/app.css";
import banner from "../assets/images/testbanner2.webp";

const Banner = () => {
  return (
    <>
      <div className="banner-body">
        <img src={banner} width="100%" alt="banner" />
      </div>
    </>
  );
};

export default Banner;
