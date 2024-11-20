import aboutImage from "../assests/about.avif";

const About = () => {
  return (
    <>
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ margin: "100px 50px" }}
      >
        <div>
          <img src={aboutImage} style={{ height: "18rem" }} alt="logo" />
        </div>
        <div>
          <h1 style={{ fontWeight: "700" }}>
            React development is carried out by passionate developers
          </h1>
          <p style={{ alignItems: "center", color: "gray" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis
            voluptatem accusantium nemo perspiciatis delectus atque autem!
            Voluptatum tenetur beatae unde aperiam, repellat expedita
            consequatur! Officiis id consequatur atque doloremque!
          </p>
          <p style={{ alignItems: "center", color: "gray" }}>
            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
            expedita at? Asperiores nemo possimus nesciunt dicta veniam
            aspernatur quam mollitia.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
