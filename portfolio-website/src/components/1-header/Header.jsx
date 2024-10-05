import { useState } from "react";
import { useEffect } from "react";
import "./header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faXmark,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [theme, settheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);
  return (
    <header className="flex">
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="menu"
      >
        Menu
        <FontAwesomeIcon icon={faArrowDown} className="arrow-down" />
      </button>
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="#about">About</a>
          </li>
          {/* <li>
            <a href="">Articles</a>
          </li> */}
          <li>
            <a href="#projects">Projects</a>
          </li>
          {/* <li>
            <a href="">Speaking</a>
          </li> */}
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="../../../public/CV-Files/cv.html">Resume</a>
          </li>
        </ul>
      </nav>
      <button
        className="moon-sun-father"
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );
          settheme(localStorage.getItem("currentMode"));
        }}
      >
        {theme === "dark" ? (
          <span className="sun">
            <FontAwesomeIcon icon={faSun} />
          </span>
        ) : (
          <span className="moon">
            <FontAwesomeIcon icon={faMoon} />
          </span>
        )}
      </button>
      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <div className="close-father">
              <span>Navigation</span>
              <button
                onClick={() => {
                  setshowModal(false);
                }}
              >
                <FontAwesomeIcon icon={faXmark} className="exit" />
              </button>
            </div>
            <li>
              <a href="#about">About</a>
            </li>
            {/* <li>
              <a href="">Articles</a>
            </li> */}
            <li>
              <a href="#projects">Projects</a>
            </li>
            {/* <li>
              <a href="">Speaking</a>
            </li> */}
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="../../../public/CV-Files/cv.html">Resume</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
