import homeImage from "../assests/home-image.png";
import homeImageTwo from "../assests/home-image-2.png";
import { FaGooglePlay } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ margin: "100px 50px" }}
      >
        <div>
          <img src={homeImage} style={{ height: "18rem" }} alt="logo" />
        </div>
        <div>
          <h1 style={{ fontSize: "3rem", fontWeight: "700" }}>Download Now</h1>
          <h3 style={{ fontSize: "2rem", fontWeight: "700", textAlign: "end" }}>
            Lorem Ipsum
          </h3>
          <button
            style={{
              padding: "10px",
              width: "160px",
              fontWeight: "500",
              backgroundColor: "#C2410C",
              borderRadius: "5px",
              border: "none",
              color: "white",
              marginLeft: "150px",
              marginTop: "20px",
              fontSize: "16px",
            }}
          >
            <FaGooglePlay />
            <span style={{ marginLeft: "5px" }}>Download Now</span>
          </button>
        </div>
      </div>

      <div>
        <img
          src={homeImageTwo}
          style={{ height: "18rem", marginTop: "100px" }}
        />
        <h1 style={{ margin: "30px 0" }}>Lorem Ipsum Yojo</h1>
      </div>
    </>
  );
};

export default Home;
