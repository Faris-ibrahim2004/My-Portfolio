import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main-content";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer-section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [show, setshow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setshow(true);
      } else {
        setshow(false);
      }
    });
  }, []);
  return (
    <div id="up" className="container">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

      <a href="#up" style={{ opacity: show ? 1 : 0, transition: ".4s" }}>
        <button className="scroll-up">
          <FontAwesomeIcon icon={faAngleUp} />
        </button>
      </a>
    </div>
  );
}

export default App;
