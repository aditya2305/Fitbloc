import React from "react";
import HeroSection from "../HeroSection";
import Pricing from "../Pricing";
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "./Data";

const Services = () => {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjOne} />
    </>
  );
};

export default Services;
