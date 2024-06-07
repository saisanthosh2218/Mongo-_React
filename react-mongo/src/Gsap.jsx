import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Gsap() {
  useGSAP(() => {
    gsap.from(".box1", {
      x: 500,
      duration: 1.5,
      delay: 0.5,
      rotate: 720,
    });
  });

  return <div className="box1"></div>;
}

export default Gsap;
