// pages/index.js
import { useEffect } from "react";
import gsap from "gsap";
import classes from "../components/serviceCards.module.css";

export default function Cards() {
  useEffect(() => {
    // GSAP animations
    let tl = gsap.timeline({ defaults: { duration: 0.5 } });

    // Timeline for border animation
    tl.to(".card", { borderTopColor: "#bad", delay: 0.3 })
      .to(".card", { borderRightColor: "#bad" }, "-=0.2")
      .to(".card", { borderBottomColor: "#bad" }, "-=0.2")
      .to(".card", { borderLeftColor: "#bad" }, "-=0.2");

    // Animation for img-wrapper
    gsap.fromTo(
      ".img-wrapper",
      { height: 0, backgroundColor: "transparent" },
      { delay: 1, duration: 1, height: "500px", backgroundColor: "#bad" }
    );

    // Animation for image
    gsap.to(".img", { delay: 2, duration: 0.5, opacity: 1 });
  }, []);

  return (
    <div className="cardd">
      <div className="card">
        <div className="img-wrapper">
          <img
            className="img"
            src="https://i.pinimg.com/474x/51/05/cd/5105cd8879faf94733eaed0efc083bb1.jpg"
            alt="Cat Image"
          />
          <div className="overlay"></div>
        </div>
      </div>
    </div>
  );
}
