import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GsapTimeline = () => {
  const animationDone = () => {
    console.log("Animation done");
    timeline.pause();
  };
  const timeline = gsap.timeline({
    paused: true,
    repeat: -1,
    onComplete: animationDone,
    onRepeat: () => {
      timeline.reverse();
      console.log("Animation repeated");
    },
    onReverseComplete: () => {
      timeline.pause();
      console.log("Animation reversed");
    },
  });

  useGSAP(() => {
    timeline.to("#yellow-box", {
      x: 500,
      rotate: 360,
      duration: 5,
      ease: "power3.out",
    });

    timeline.to(
      "#yellow-box",
      {
        y: 200,
        // rotate: 720,
        borderRadius: "50%",
        duration: 3,
        ease: "power3.out",
      },
      "<1"
    );

    timeline.to(
      "#yellow-box",
      {
        x: 0,
        y: 0,
        borderRadius: "0%",
        rotate: 0,
        duration: 3,
      },
      ">"
    );
  }, []);

  const buttonPressed = () => {
    console.log(timeline);
    if (timeline.paused()) {
      timeline.play();
    } else {
      timeline.pause();
    }
  };

  return (
    <main>
      <h1>GsapTimeline</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.timeline()</code> method is used to create a timeline
        instance that can be used to manage multiple animations.
      </p>

      <p className="mt-5 text-gray-500">
        The <code>gsap.timeline()</code> method is similar to the{" "}
        <code>gsap.to()</code>, <code>gsap.from()</code>, and{" "}
        <code>gsap.fromTo()</code> methods, but the difference is that the{" "}
        <code>gsap.timeline()</code> method is used to create a timeline
        instance that can be used to manage multiple animations, while the{" "}
        <code>gsap.to()</code>, <code>gsap.from()</code>, and{" "}
        <code>gsap.fromTo()</code> methods are used to animate elements from
        their current state to a new state, from a new state to their current
        state, and from a new state to a new state, respectively.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.timeline()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.timeline()
        </a>{" "}
        method.
      </p>

      <div className="mt-20 space-y-10">
        <button onClick={buttonPressed}>Play/Pause</button>

        <div id="yellow-box" className="w-20 h-20 bg-yellow-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTimeline;
