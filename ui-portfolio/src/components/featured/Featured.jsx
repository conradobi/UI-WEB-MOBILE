import Container from "../styles/Container";
import design from "../img/design.png";
import featured from "../../data/featured";

const Featured = () => {
  return (
    <>
      {/* <div className="featured">
        <Container>
          <h2 className="featured-title">Featured works</h2>
          <div>
            <div className="featured-work">
              <img src={design} alt="" className="featured-img" />
              <div className="featured-content">
                <h3 className="featured-content-title">Design Dashboards</h3>
                <div className="featured-meta">
                  <div className="year">2020</div>
                  <div className="category">Dashboard</div>
                </div>
                <div className="featured-content-desc">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </div>
              </div>
            </div>
            <div className="divider"></div>
          </div>
          <div>
            <div className="featured-work">
              <img src={design} alt="" className="featured-img" />
              <div className="featured-content">
                <h3 className="featured-content-title">Design Dashboards</h3>
                <div className="featured-meta">
                  <div className="year">2020</div>
                  <div className="category">Dashboard</div>
                </div>
                <div className="featured-content-desc">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </div>
              </div>
            </div>
            <div className="divider"></div>
          </div>
          <div>
            <div className="featured-work">
              <img src={design} alt="" className="featured-img" />
              <div className="featured-content">
                <h3 className="featured-content-title">Design Dashboards</h3>
                <div className="featured-meta">
                  <div className="year">2020</div>
                  <div className="category">Dashboard</div>
                </div>
                <div className="featured-content-desc">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div> */}
      <div className="featured">
        <Container>
          <h2 className="featured-title">Featured works</h2>
          {featured.map((work, index) => (
            <div key={index}>
              <div className="featured-work">
                <img src={work.img} alt="" className="featured-img" />
                <div className="featured-content">
                  <h3 className="featured-content-title">{work.title}</h3>
                  <div className="featured-meta">
                    <div className="year">{work.year}</div>
                    <div className="category">{work.category}</div>
                  </div>
                  <div className="featured-content-desc">{work.desc}</div>
                </div>
              </div>
              {index < featured.length - 1 && <div className="divider"></div>}
            </div>
          ))}
        </Container>
      </div>
    </>
  );
};

export default Featured;
