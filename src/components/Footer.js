import "../assets/css/app.css";
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div class="footer">
          <div class="row">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa fa-youtube"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
          </div>

          <div class="row">
            <ul>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>

          <div class="row">
            Cherish Copyright © 2023 Cherish - All rights reserved || Designed
            By: Ramiro
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
