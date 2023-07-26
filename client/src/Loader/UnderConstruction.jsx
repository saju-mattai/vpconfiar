import React from "react";
import Lottie from "lottie-react";
import Loader from "./Loader.json";

const UnderConstruction = () => (
  <Lottie
    animationData={Loader}
    loop={true}
    style={{ width: "100%", height: "400px" }} // Replace '300px' and '200px' with your desired width and height
  />
);

export default UnderConstruction;
