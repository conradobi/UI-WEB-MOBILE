import Button from "../styles/Button";
import Container from "../styles/Container";
import headshot from "../img/hedshot.png";

const Hero = () => {
  return (
    <div>
      <Container>
        <div className="hero">
          <div className="hero-content">
            <h1 className="hero-content-title">
              Hi, I am John,
              <br />
              Creative Technologist
            </h1>
            <p className="hero-content-desc">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <Button>Download Resume</Button>
          </div>
          <div className="hero-content-img">
            <img src={headshot} alt="" className="hero-content-img" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
