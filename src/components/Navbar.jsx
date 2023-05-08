import * as React from "react";
import Button from "@mui/material/Button";

const Topnav = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">
            Beta Stash
          </a>
          {/* nav links here */}
          <ul className="list">
            <li>
              <a href="/home" className="links">
                Home
              </a>
            </li>
            <li>
              <a href="/home" className="links">
                About Us
              </a>
            </li>
            <li>
              <a href="/home" className="links">
                Services
              </a>
            </li>
            <li>
              <a href="/home" className="links">
                Blog Page
              </a>
            </li>
          </ul>
          <div className="navigate">
            <Button variant="contained">Contact Us</Button>
          </div>

          <button
            className="navbar-toggler small"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark  small"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Beta Stash
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About Us{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Blog Page
                  </a>
                </li>
                <br />
                <li>
                  <Button variant="contained" style={{ width: "100%" }}>
                    Contact Us
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Topnav;
