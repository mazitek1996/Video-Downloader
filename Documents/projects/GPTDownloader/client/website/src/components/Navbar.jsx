import { Link } from "react-scroll";
import Scrollspy from 'react-scrollspy';
function Navbar() {
  return (
    <div className='nav_root'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid container">
          <a className="navbar-brand" href="#">GPTDownloader</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <Scrollspy
              className="navbar-nav ms-auto"
              items={["home", "how-it-works", "supported-platform", "download-app"]}
              currentClassName="active"
              offset={-70}
            >
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="how-it-works"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  How it Works
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="supported-platform"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Supported Platform
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="download-app"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Download App
                </Link>
              </li>
            </Scrollspy>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
