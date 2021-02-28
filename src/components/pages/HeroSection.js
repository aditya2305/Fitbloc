import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import Aos from "aos";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = ({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headLine,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  anim,
  lotties,
}) => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require(`${lotties}`),
    });

    Aos.init({
      offset: 400,
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div data-aos={anim} data-aos-anchor-placement="top-center">
        <div
          className={
            lightBg ? "home__hero-section" : "home__hero-section darkBg"
          }
        >
          <div className="container">
            <div
              className="row home__hero-row"
              style={{
                display: "flex",
                flexDirection: imgStart === "start" ? "row-reverse" : "row",
              }}
            >
              <div className="col">
                <div className="home__hero-text-wrapper">
                  <div className="top-line">{topLine}</div>
                  <h1 className={lightText ? "heading" : "heading dark"}>
                    {headLine}
                  </h1>
                  <p
                    className={
                      lightTextDesc
                        ? "home__hero-subtitle"
                        : "home__hero-subtitle dark"
                    }
                  >
                    {description}
                  </p>
                  <Link to="/sign-up">
                    <Button buttonSize="btn--wide" buttonColor="blue">
                      {buttonLabel}
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="col">
                <div className="home__hero-img-wrapper">
                  <div className="lottie" ref={container}></div>
                  {/*<img src={img} alt={alt} className="home__hero-img" />*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
