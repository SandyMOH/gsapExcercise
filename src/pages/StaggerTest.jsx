import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const StagerManyTest = () => {
  // const timeline = gsap.timeline({
  //   repeat: -1,
  // });

  const [from, setFrom] = useState("center");
  const [row, setRow] = useState(5);
  const [column, setColumn] = useState(13);

  const fromChange = (e) => {
    setFrom(e.target.value);
  };

  const playBox = () => {};

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1 });

    timeline
      .to(".stagger-box2", {
        stagger: {
          from: from,
          amount: 1,
        },
        duration: 2,
        scale: 0.5,
        ease: "back.out",
      })
      .to(".stagger-box2", {
        stagger: {
          from: from,
          amount: 1,
        },
        duration: 2,
        scale: 1,
        ease: "back.out",
      });

    return () => {
      timeline.restart();
      timeline.kill();
    }; // Cleanup the timeline when component unmounts or from changes
  }, [from]);

  return (
    <main>
      <h1>Stagger</h1>
      <div className="mt-10 flex flex-col gap-5">
        {Array.from({ length: row }, (_, index) => (
          <div className="flex gap-5">
            {Array.from({ length: column }, (_, index) => (
              <div className="w-20 h-20 bg-success rounded-lg stagger-box2" />
            ))}
          </div>
        ))}
      </div>
      <div className="mt-10 mb-20 text-white">
        <h1>Box Control</h1>
        <div className="my-3">
          <div className="mb-3 text-lg font-bold">From</div>
          <div className="flex flex-col gap-2">
            <div className="radio-input">
              <input
                id="from-center"
                type="radio"
                name="from"
                value="center"
                checked={from === "center"}
                onChange={fromChange}
                className="peer/from-center radio radio-sm radio-success"
              />
              <label
                className=" peer-checked/from-center:text-success peer-checked/from-center:shadow-inner "
                for="from-center"
              >
                "Center"
              </label>
            </div>
            <div className="radio-input">
              <input
                id="from-end"
                type="radio"
                name="from"
                value="end"
                checked={from === "end"}
                onChange={fromChange}
                className="peer/from-end radio radio-sm radio-success"
              />
              <label
                className=" peer-checked/from-end:text-success peer-checked/from-end:shadow-inner "
                for="from-end"
              >
                "End"
              </label>
            </div>
            <div className="radio-input">
              <input
                id="from-edges"
                type="radio"
                name="from"
                value="edges"
                checked={from === "edges"}
                onChange={fromChange}
                className="peer/from-edges radio radio-sm radio-success"
              />
              <label
                className=" peer-checked/from-edges:text-success peer-checked/from-edges:shadow-inner "
                for="from-edges"
              >
                "Edges"
              </label>
            </div>
            <div className="radio-input">
              <input
                id="from-random"
                type="radio"
                name="from"
                value="random"
                checked={from === "random"}
                onChange={fromChange}
                className="peer/from-random radio radio-sm radio-success"
              />
              <label
                className=" peer-checked/from-random:text-success peer-checked/from-random:shadow-inner "
                for="from-random"
              >
                "Random"
              </label>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </main>
  );
};

export default StagerManyTest;
