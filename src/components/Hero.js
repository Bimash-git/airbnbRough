import React from "react";

function Hero() {
  return (
    <section className="hero">
      <img
        src={require("./image/Hero.jpg")}
        alt="airbnb background"
        className="hero--photo"
      ></img>
      <h1 className="hero--header">Airbnb site</h1>
      <p className="hero--text">
        learn, grow and get better today and everyday
      </p>
    </section>
  );
}
export default Hero;
