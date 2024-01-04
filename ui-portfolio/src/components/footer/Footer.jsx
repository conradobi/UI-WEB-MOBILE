import fb from "./fb.png";
import x from "./x.png";
import insta from "./insta.png";
import linkedin from "./linkedin.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-icons">
          <img src={fb} alt="" />
          <img src={insta} alt="" />
          <img src={x} alt="" />
          <img src={linkedin} alt="" />
        </div>

        <p className="footer-text">Copyright ©2020 All rights reserved </p>
      </div>
    </>
  );
};

export default Footer;
