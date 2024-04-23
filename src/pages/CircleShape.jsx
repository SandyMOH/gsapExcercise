import { useGSAP } from "@gsap/react";

import { animateInCircle } from "../utils/shape";

const Circle = () => {
  useGSAP(() => {
    animateInCircle("#blue-box");
  }, []);

  return (
    <main>
      <h1>Circle</h1>
      <div className="mt-20">
        <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
      </div>
    </main>
  );
};

export default Circle;
