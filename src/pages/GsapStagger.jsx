import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GsapStagger = () => {
  const [show, setShow] = useState(false);

  useGSAP(() => {
    showBox();
  }, []);

  const showBox = () => {
    gsap.from(".stagger-box", {
      duration: 1,
      y: 100,
      opacity: 0, // Make sure elements are visible before starting animation
      stagger: 0.3,
      ease: "power3.out",
      onComplete: () => setShow(true), // Update state only after animation completes
    });
  };

  const hideBox = () => {
    gsap.to(".stagger-box", {
      duration: 1,
      y: -50,
      opacity: 0,
      rotate: 360,
      stagger: 0.3,
      ease: "back.in(2)",
      onComplete: () => setShow(false), // Update state only after animation completes
    });
  };

  const onBoxClick = () => {
    console.log("onBoxClick", show);
    if (show) {
      hideBox();
    } else {
      showBox();
    }
  };

  return (
    <main>
      <h1>GsapStagger</h1>

      <p className="mt-5 text-gray-500">
        GSAP stagger is a feature that allows you to apply animations with a
        staggered delay to a group of elements.
      </p>

      <p className="mt-5 text-gray-500">
        By using the stagger feature in GSAP, you can specify the amount of time
        to stagger the animations between each element, as well as customize the
        easing and duration of each individual animation. This enables you to
        create dynamic and visually appealing effects, such as staggered fades,
        rotations, movements, and more.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://gsap.com/resources/getting-started/Staggers"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          Gsap Stagger
        </a>{" "}
        feature.
      </p>

      <div onClick={onBoxClick}>
        <button>{show ? "Hide" : "Show"} Box</button>
      </div>

      <div className="mt-20">
        <div className="flex gap-5">
          <div className="w-20 h-20 bg-indigo-200 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-300 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-400 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-500 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-600 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-700 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-800 rounded-lg stagger-box" />
        </div>
      </div>
    </main>
  );
};

export default GsapStagger;
