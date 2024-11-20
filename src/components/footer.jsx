import Logo from "./logo";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <hr />
      <div className="d-flex justify-content-between">
        <div>
          <Logo />
        </div>
        <div className="d-flex" style={{ gap: "20px" }}>
          <div>
            <p style={{ fontWeight: "500" }}>RESOURCES</p>
            <NavLink to={"/"} style={{ textDecoration: "none" }}>
              Home
            </NavLink>
            <p>About</p>
          </div>
          <div>
            <p style={{ fontWeight: "500" }}>LEGAL</p>
            <p>Privacy Policy</p>
            <p>Terms & Condition</p>
          </div>
        </div>
      </div>
      <hr />
      <p style={{ margin: "30px 0" }}>
        © {new Date().getFullYear()} Your Company. All Rights Reserved.
      </p>
      <hr />
    </div>
  );
};

export default Footer;
