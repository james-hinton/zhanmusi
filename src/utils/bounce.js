export default function startBounce(e) {

  // Get the element that was clicked
  const element = e.target;

  // Bounce the element from the bottom of the screen
  element.animate(
    [
      // keyframes
      { transform: "translateY(0px)" },
      { transform: "translateY(100px)" },
      { transform: "translateY(0px)" },
    ],
    {
      // timing options
      duration: 1000,
      iterations: 2,

      // Fill in the rest of the options
      easing: "ease-in-out",
      direction: "alternate",
      fill: "forwards",
    }
  );

}
