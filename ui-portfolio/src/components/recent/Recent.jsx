import Container from "../styles/Container";

const Recent = () => {
  return (
    <div className="recent">
      <Container>
        <div className="recent-top">
          <h3 className="recent-tltle">Recent</h3>
          <a href className="recent-link">
            View All
          </a>
        </div>
        <div className="recent-inner">
          <div className="recent-col">
            <h1 className="recent-col-title">
              Making a design system from scratch
            </h1>
            <div className="recent-meta">
              <div className="recent-meta-date">12 Feb 2020 </div>
              <div className="recent-meta-date">Design Pattern </div>
            </div>
            <div className="recent-col-desc">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </div>
          </div>
          <div className="recent-col">
            <h1 className="recent-col-title">
              Making a design system from scratch
            </h1>
            <div className="recent-meta">
              <div className="recent-meta-date">12 Feb 2020 </div>
              <div className="recent-meta-date">Design Pattern </div>
            </div>
            <div className="recent-col-desc">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Recent;
