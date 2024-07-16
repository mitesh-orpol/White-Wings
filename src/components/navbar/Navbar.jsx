import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navbar.css";

const HeaderComponent = () => {
  // fix header top side
  useEffect(() => {
    const handleScroll = () => {
      if (window.matchMedia("only screen and (min-width: 1200px)").matches) {
        if (window.scrollY >= 50) {
          document.querySelector(".header").classList.add("fixed-header");
          document.querySelector(".navbar").classList.add("scrolled-navbar");
        } else {
          document.querySelector(".header").classList.remove("fixed-header");
          document.querySelector(".navbar").classList.remove("scrolled-navbar");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to top immediately
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header className="main-class">
      <div className="abc">
        <div className="header">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/" onClick={scrollToTop}>
              <img
                src="../../images/home/white wings png.png"
                alt="icon"
                width="180px"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link spac" to="/" onClick={scrollToTop}>
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link spac"
                    to="/about"
                    onClick={scrollToTop}
                  >
                    About Us
                  </Link>
                </li>

                <li className=" nav-link">
                  <Link className="nav-link">
                    Product<i class="fa-solid fa-angle-down"></i>
                  </Link>
                  <div class="dropdown">
                    <ul>
                      <li class="dropdown-link">
                        <Link to="/aluminium" onClick={scrollToTop}>
                          Aluminium
                        </Link>
                      </li>
                      <li class="dropdown-link">
                        <Link to="/UPVC" onClick={scrollToTop}>
                          UPVC
                        </Link>
                      </li>                    
                    </ul>
                  </div>
                </li>
                {/* <li className=" nav-link">
                  <Link className="nav-link">
                    Product<i class="fa-solid fa-angle-down"></i>
                  </Link>
                  <div class="dropdown">
                    <ul>
                      <li class="dropdown-link">
                        <Link href="#">
                          Window<i class="fa-solid fa-angle-down"></i>
                        </Link>
                        <div class="dropdown second">
                          <ul>
                            <li class="dropdown-link">
                              <Link to="/product" onClick={scrollToTop}>
                                UPVC
                              </Link>
                            </li>
                            <li class="dropdown-link">
                              <Link to="/aluminium" onClick={scrollToTop}>
                                Aluminium
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li class="dropdown-link">
                        <Link href="#" onClick={scrollToTop}>
                          Doors<i class="fa-solid fa-angle-down"></i>
                        </Link>
                        <div class="dropdown second">
                          <ul>
                            <li class="dropdown-link">
                              <Link to="/door" onClick={scrollToTop}>
                                UPVC
                              </Link>
                            </li>
                            <li class="dropdown-link">
                              <Link to="/dooralu" onClick={scrollToTop}>
                                Aluminium
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li> */}
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/blog" onClick={scrollToTop}>
                    Blog
                  </Link>
                </li> */}
                <li className="nav-item item-con">
                  <Link
                    className="nav-link"
                    to="/contact"
                    onClick={scrollToTop}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <button className="btn my-2 my-sm-0 call" type="submit">
                  <Link to="tel:+91 98790 52588">
                    <i className="fa-solid fa-phone"></i> Call Us
                  </Link>
                </button>
              </form>
            </div>
          </nav>
          <Outlet />
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
