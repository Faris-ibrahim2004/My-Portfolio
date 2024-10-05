import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Lottie from "lottie-react";
import doneAnimation from "../../../public/animation/animation-done.json";
import contactAnimation from "../../../public/animation/send.json";

const Contact = () => {
  const [state, handleSubmit] = useForm("xldrykeb");

  return (
    <section className="contact-us" id="contact">
      <h1 className="title">
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
        Contact us
      </h1>
      <p className="subtitle">
        Contact us for more information and get notified when i publish
        something new.
      </p>
      <div className="flex">
        <form className="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email Address</label>
            <br />
            <input
              autoComplete="off"
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <br />
          </div>
          <div style={{ marginTop: "1.6rem" }}>
            <label htmlFor="massage">Your Massage</label>
            <br />
            <textarea
              id="massage"
              placeholder="Your Massage"
              name="message"
              required
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <br />
          </div>
          <button className="submit" type="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting....." : "Submit"}
          </button>
          {state.succeeded && (
            <h2
              style={{
                fontSize: "18px",
                marginTop: "1.7rem",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Lottie
                loop={false}
                style={{ height: "60px" }}
                animationData={doneAnimation}
              />{" "}
              Thanks for Text Me 😄
            </h2>
          )}
        </form>
        <div className="animation">
          <Lottie
            style={{ height: "500px" }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
};
export default Contact;
