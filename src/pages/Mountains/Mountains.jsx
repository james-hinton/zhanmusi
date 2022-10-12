// this will be a nice page with mountains on it :)
import { blue } from "@mui/material/colors";
import { useState } from "react";
import "./Mountains.scss";

const Mountains = () => {
  // As we scroll down the page, the mountains will move

  const [mountains, setMountains] = useState([
    {
      id: 1,
      src: "/mountains/landscape.png",
      alt: "mountain landscape",
      moveSpeed: 0.1,
      zIndex: 5,
      className: "landscape",
      blurSpeed: 0.02,
      blur: 0,
    },
    {
      id: 2,
      src: "/mountains/dark.png",
      alt: "mountain dark",
      moveSpeed: -0.25,
      zIndex: 2,
      className: "dark",
      blurSpeed: -0.1,
      blur: 4,
    },
    {
      id: 3,
      src: "/mountains/eagle.png",
      alt: "eagle",
      moveSpeed: 0.8,
      moveLeft: true,
      zIndex: 3,
      height: "30vh",
      right: "-30%",
      className: "eagle",
    },
  ]);

  // Handle the scroll
  const handleScroll = () => {
    let mountainsElements = document.querySelectorAll(".mountain");

    mountainsElements.forEach((mountain) => {
      // Get the relative mountain according to state
      let relativeMountain = mountains.find(
        (m) => m.id === parseInt(mountain.id)
      );

      let speed = relativeMountain.moveSpeed;
      // Move the mountains so they look like they are zooming in
      mountain.style.transform = `translateY(${window.pageYOffset * speed}px)`;

      // Move the mountains to the left
      if (relativeMountain.moveLeft) {
        mountain.style.transform += `translateX(-${
          window.pageYOffset * speed
        }px)`;
      }

      // Blur the mountains as we scroll down
      if (relativeMountain.blurSpeed) {
        let blur = window.pageYOffset * relativeMountain.blurSpeed;
        blur = Math.round((blur + Number.EPSILON) * 100) / 100;
        if (blur < 0.5) {
          blur = 0;
        }
        mountain.style.filter = `blur(${blur}px)`;
      }
    });
  };

  // If at top of the page, reset the mountains to their original position
  const handleReset = () => {
    // if at top of page, reset the mountains
    if (window.pageYOffset === 0) {
      let mountainsElements = document.querySelectorAll(".mountain");

      mountainsElements.forEach((mountain) => {
        let relativeMountain = mountains.find(
          (m) => m.id === parseInt(mountain.id)
        );

        // Mountain filter
        mountain.style.filter = `blur(${relativeMountain.blur}px)`;
      });
    }
  };

  // Add the event listener
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("scroll", handleReset);

  return (
    <>
      <div id="mountain-container">
        {mountains.map((mountain) => (
          <img
            key={mountain.id}
            id={`${mountain.id}`}
            className={`mountain ${mountain.className}`}
            src={mountain.src}
            alt={mountain.alt}
            style={{
              zIndex: mountain.zIndex,
              height: mountain.height,
              position: "absolute",
              right: mountain.right,
              filter: `blur(${mountain.blur}px)`,
            }}
          />
        ))}
        <div className="mountain-text">
          <h1>Mountains</h1>
        </div>
      </div>
      <div id="ocean-container"></div>
    </>
  );
};

export default Mountains;
