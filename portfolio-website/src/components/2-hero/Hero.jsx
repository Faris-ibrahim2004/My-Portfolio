import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Lottie from "lottie-react";
import programmingAnimation from "../../../public/animation/programming.json";
import { motion } from "framer-motion";

import "./hero.css";

const Hero = () => {
  return (
    <section className="hero flex capitalize" id="about">
      <div className="left-section">
        <div className="parent-avatar">
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="/Avatar-circle.png"
            alt=""
            className="avatar"
          />
        </div>
        <motion.h1
          // initial={{ scale: 0 }}
          // animate={{ scale: 1 }}
          // transition={{ duration: 1 }}
          className="title"
        >
          Software designer, Front-End Developer and A different person
        </motion.h1>
        <p className="subtitle">
          I’m Faris, a software designer , Front-end developer , i live based in
          Cairo City. where i develop technologies and develope pages
        </p>
        <div className="icons">
          <a href="https://github.com/Faris-ibrahim2004" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/faris-ibrahim-456ba22bb/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
          <a
            href="https://www.instagram.com/faris_ibrahim_v?igsh=MTZubDRkemhhYzR4cQ=="
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
          <a
            href="https://www.facebook.com/fares.emohamed.1?mibextid=ZbWKwL"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} className="icon" />
          </a>
        </div>
      </div>
      <div className="right-section animation">
        <Lottie animationData={programmingAnimation} />
      </div>
    </section>
  );
};
export default Hero;
