import gsap from "gsap";

export const animateInCircle = (
  selector,
  duration = 3,
  { x = 100, y = 100, radius = 100 } = {}
) => {
  // Use GSAP's timeline for a more complex sequence of animations
  const tl = gsap.timeline({ repeat: -1, yoyo: false }); // repeat: -1 for infinite loop

  const intialX = x + radius; // Calculate the initial x position
  const intialY = y; // Calculate the initial y position

  gsap.set(selector, { x: intialX, y: intialY });
  // Calculate the path for circular motion
  for (let i = 0; i <= 360; i += 10) {
    const angle = (i * Math.PI) / 180; // Convert angle from degrees to radians
    const posX = x + radius * Math.cos(angle); // Calculate the x position
    const posY = y + radius * Math.sin(angle); // Calculate the y position

    tl.to(
      selector,
      {
        x: posX,
        y: posY,
        ease: "none",
        duration: duration / 50, // Divide the duration evenly across the steps
        delay: 0,
      },
      `+=0`
    ); // Immediate follow-up without delay
  }

  return tl; // Return the timeline for further manipulation if needed
};
