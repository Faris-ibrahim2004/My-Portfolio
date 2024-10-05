import React from "react";
import { useState } from "react";
import "./main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { myProjects } from "./myProjects";
import { motion, AnimatePresence } from "framer-motion";

const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setarr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    // setarr(cssProjects);
    const newArr = myProjects.filter((item) => {
      return item.category === buttonCategory;
    });
    setarr(newArr);
  };
  return (
    <main id="projects">
      <div className="left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
            setarr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            setcurrentActive("css");
            handleClick("htmlcss");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => {
            setcurrentActive("javascript");
            // setarr(jsProjects);
            handleClick("javascript");
          }}
          className={currentActive === "javascript" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            setcurrentActive("bootstrap");
            // setarr(bootstrapProjects);
            handleClick("bootstrap");
          }}
          className={currentActive === "bootstrap" ? "active" : null}
        >
          BootStrap
        </button>
        <button
          onClick={() => {
            setcurrentActive("tailwind");
            handleClick("tailwind");
          }}
          className={currentActive === "tailwind" ? "active" : null}
        >
          tailwind
        </button>
        <button
          onClick={() => {
            setcurrentActive("react");
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React & MUI
        </button>
        <button
          onClick={() => {
            setcurrentActive("sass");
            handleClick("sass");
          }}
          className={currentActive === "sass" ? "active" : null}
        >
          SASS
        </button>
      </div>
      <div className="right-section">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8 }}
                // animate={{ opacity: 1 }}
                // initial={{ opacity: 0 }}
                // exit={{ opactiy: 0 }}
                key={item.imgPath}
                className="card"
              >
                <a href={item.link} target="_blank">
                  <img src={item.imgPath} alt="" />
                </a>
                <div className="inside-box">
                  <h3 className="title">{item.projectTitle}</h3>
                  <p className="subtitle">super creative web template.</p>
                  <div className="flex">
                    <div className="two-icons">
                      <a href={item.link} target="_blank">
                        <FontAwesomeIcon icon={faLink} />
                      </a>
                      <a href={item.gbRepo} target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </div>
                    <a href="" target="_blank" className="more">
                      More
                      <FontAwesomeIcon icon={faArrowRight} className="arr-r" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>
    </main>
  );
};
export default Main;
