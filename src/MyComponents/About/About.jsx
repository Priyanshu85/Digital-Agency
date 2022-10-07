import React from "react";
import illustrations from "../../images/illustrations-idea-startup.png";

function About() {
  return (
    <div
      className="md:flex justify-center"
      style={{ background: "rgb(129,91,224)", alignItems: "center" }}
    >
      <div className="flex flex-col items-center md:items-start">
        <p className="text-white font-bold font-sans text-7xl flex text-center justify-center w-40 md:text-left md:ml-44 md:w-3/4 md:mt-7">
          A full service digital marketing agency
        </p>
        <p className="text-white  text-xl flex text-center justify-center mt-5 w-44 md:w-3/5 md:text-xl md:text-left md:ml-44">
          Our team develops effective content strategies for forward thinking
          companies. We have a proven track record in increasing search engine
          rankings.
        </p>
      </div>
      <div className="md:w-3/4">
        <img src={illustrations} alt="climb" className="mt-3" />
      </div>
    </div>
  );
}
export default About;
