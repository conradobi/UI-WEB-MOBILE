import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Blog from "../../pages/Blog";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import Work from "../../pages/Work";
import Container from "../styles/Container";
import mobileIcon from "./mobile-icon.png";

const Nav = () => {
  const [isToggled, setisToggled] = useState(false);

  const handleToggle = () => {
    setisToggled(!isToggled);
  };

  return (
    <header>
      <Container>
        <Router>
          <div className="desktop">
            <ul className="nav">
              <li className="mobile-nav-item">
                <Link to="/" className="nav-links">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/work" className="nav-links">
                  Work
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-links">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-links">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="mobile-icon">
            <img src={mobileIcon} alt="" onClick={handleToggle} />
          </div>
          {isToggled && (
            <div className="mobile">
              <ul>
                <ul className="mobile-nav">
                  <li className="mobile-nav-item">
                    <Link to="/" className="nav-links">
                      Home
                    </Link>
                  </li>
                  <li className="mobile-nav-item">
                    <Link to="/work" className="nav-links">
                      Work
                    </Link>
                  </li>
                  <li className="mobile-nav-item">
                    <Link to="/blog" className="nav-links">
                      Blog
                    </Link>
                  </li>
                  <li className="mobile-nav-item">
                    <Link to="/contact" className="nav-links">
                      Contact
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
          )}

          {/* Place Routes outside of other elements */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </Container>
    </header>
  );
};

export default Nav;
