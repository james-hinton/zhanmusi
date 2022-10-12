// this will be a nice page with mountains on it :)
import { useState } from "react";
import "./Mountains.scss";

const Mountains = () => {
  // As we scroll down the page, the mountains will move

  const [mountains, setMountains] = useState([
    {
      id: 1,
      src: "/mountains/landscape.png",
      alt: "mountain landscape",
      moveSpeed: 0.7,
      zIndex: 5,
    },
    {
      id: 2,
      src: "/mountains/dark.png",
      alt: "mountain dark",
      moveSpeed: 0.2,
      zIndex: 2,
    },
    {
      id: 3,
      src: "/mountains/eagle.png",
      alt: "eagle",
      moveSpeed: 1.2,
      moveLeft: true,
      zIndex: 5,
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
    });
  };

  // Add the event listener
  window.addEventListener("scroll", handleScroll);

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
