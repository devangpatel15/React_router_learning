import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

const Contact = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{ margin: "200px 0" }}
      >
        <div
          style={{
            backgroundColor: "#F3F4F6",
            padding: "20px",
            borderRadius: "10px",
            marginRight: "20px",
          }}
        >
          <h1 style={{ fontWeight: "800" }}>Get in touch:</h1>
          <p style={{ color: "#4B5563", fontWeight: "500" }}>
            Fill in the form to start a conversation
          </p>
          <div className="d-flex align-items-center">
            <CiLocationOn style={{ marginRight: "10px" }} />
            <span> Acme Inc, Street, State, Postal Code</span>
          </div>
          <div className="d-flex align-items-center">
            <IoCallOutline style={{ marginRight: "10px" }} />
            <span>+44 1234567890</span>
          </div>
          <div className="d-flex align-items-center">
            <CiMail style={{ marginRight: "10px" }} />
            <span>info@acme.org</span>
          </div>
        </div>
        <div
          className="d-flex"
          style={{ flexDirection: "column", gap: "10px" }}
        >
          <input
            placeholder="Full Name"
            style={{
              width: "350px",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid gray",
            }}
          />
          <input
            placeholder="Email"
            style={{
              width: "350px",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid gray",
            }}
          />
          <input
            placeholder="Telephone number"
            style={{
              width: "350px",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid gray",
            }}
          />

          <button
            style={{
              padding: "10px",
              width: "100px",
              fontWeight: "500",
              backgroundColor: "#C2410C",
              borderRadius: "5px",
              border: "none",
              color: "white",
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
