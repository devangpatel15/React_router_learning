import Logo from "./logo";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div
        className="d-flex justify-content-between container align-items-center"
        style={{
          marginTop: "25px",
          padding: "10px",
          fontWeight: "500",
          boxShadow: "0px 0px 1px 0px;",
          backgroundColor: "white",
          position: "sticky",
          top: "0",
        }}
      >
        <div>
          <Logo />
        </div>
        <div>
          <NavLink
            style={{
              marginRight: "10px",
              textDecoration: "none",
              color: "rgb(55 65 81 / var(--tw-text-opacity))",
            }}
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            style={{
              marginRight: "10px",
              textDecoration: "none",
              color: "rgb(55 65 81 / var(--tw-text-opacity))",
            }}
          >
            About
          </NavLink>
          <NavLink
            to={"/contact"}
            style={{
              textDecoration: "none",
              color: "rgb(55 65 81 / var(--tw-text-opacity))",
            }}
          >
            Contact
          </NavLink>
        </div>
        <div style={{ fontWeight: "500" }}>
          <button
            style={{
              border: "none",
              backgroundColor: "white",
              marginRight: "10px",
            }}
          >
            Log in
          </button>
          <button
            style={{
              padding: "5px 10px",
              backgroundColor: "#C2410C",
              borderRadius: "5px",
              border: "none",
              color: "white",
              marginRight: "10px",
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
