import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/main.css";
import {
  faBars,
  faChartPie,
  faCogs,
  faHouse,
  faPhone,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className={`fade-done ${isOpen ? "open" : ""}`}>
        <div className="flex justify-between md:w-max w-full items-center">
          <Link to="/" className="logo">
            <img src="/logoc.png" className="w-12 h-12" />
          </Link>
          <button className="text-white focus:outline-none block  md:hidden" onClick={toggleDrawer}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <ul className={`nav-links ${isOpen ? " open" : ""}`}>
          <li className="md:hidden flex justify-end  ">
            <button className="text-white focus:outline-none mt-2 mr-3 block  md:hidden" onClick={toggleDrawer}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </li>
          <li>
            <Link to="/" className={isActive("/") ? "active" : ""} onClick={toggleDrawer}>
              <FontAwesomeIcon icon={faHouse} />
              &nbsp; Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={isActive("/about") ? "active" : ""} onClick={toggleDrawer}>
              <FontAwesomeIcon icon={faUser} />
              &nbsp; About Me
            </Link>
          </li>
          <li>
            <Link
              to="/#skills"
              className={isActive("#skills") ? "active" : ""}
              onClick={() => {
                const element = document.querySelector("#skills");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
                toggleDrawer()
              }}
            >
              <FontAwesomeIcon icon={faCogs} />
              &nbsp; Skills
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={isActive("/projects") ? "active" : ""}
              onClick={toggleDrawer}
            >
              <FontAwesomeIcon icon={faChartPie} />
              &nbsp; Projects
            </Link>
          </li>
          <li>
            <Link
              to="/#contact"
              className={isActive("#contact") ? "active" : ""}
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
                toggleDrawer()
              }}
            >
              <FontAwesomeIcon icon={faPhone} />
              &nbsp; Contact
            </Link>
          </li>
          <button className="btn header-btn">
            <a href="https://firebasestorage.googleapis.com/v0/b/chiragbhanderidilipbhai.appspot.com/o/Chirag_Resume.pdf?alt=media&token=235665ff-ae02-4d0f-be67-a23e19421a44">
              Resume
            </a>
          </button>
        </ul>
      </header>
    </>
  );
};

export default Header;
