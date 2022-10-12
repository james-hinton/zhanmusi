import classNames from "classnames";
import { useEffect, useState, useContext, useCallback } from "react";
import { CursorContext } from "../../Generic/Cursor/CursorContextProvider";
import "./Repo.scss";

const Repo = ({ project, priv, about, language, image, link }) => {
  const [background, setBackground] = useState(null);
  const [bgImage, setbgImage] = useState(null);
  const [cursor, setCursor] = useContext(CursorContext);
  const toggleCursor = useCallback((mood) => {
    setCursor(({ active }) => ({ active: !active, mood: mood }));
  });

  useEffect(() => {
    setbgImage();
    if (background) {
      setbgImage("url(" + image + ")");
    }
  }, [background]);

  // If this repo is in the middle of the screen, set the background image to the repo image
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(project);
      const rect = element.getBoundingClientRect();
      if (
        rect.top < window.innerHeight / 2 &&
        rect.bottom > window.innerHeight / 2
      ) {
        console.log("Element is in the middle of the screen", project);
        // Add a class of "active" to the element
        // find element of element-bg
        document.getElementById(project + "-bg").classList.add("active");
        document.getElementById(project).classList.add("active");
      } else {
        // Remove the class "active" from the element
        document.getElementById(project + "-bg").classList.remove("active");
        document.getElementById(project).classList.remove("active");
        setBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        style={{ backgroundImage: bgImage, cursor: "pointer" }}
        className={classNames({
          repo: "repo",
          background: background,
          desktop: "desktop",
        })}
        onMouseEnter={() => {
          setBackground(project);
          toggleCursor("shock");
        }}
        onMouseLeave={() => {
          setBackground(null);
          toggleCursor();
        }}
        onClick={() => {
          if (link) {
            window.open(link, "_blank");
          }
        }}
      >
        <div className="repo__top">
          <div className="title">
            <div className="project">{project}</div>
            <div className="public">
              <p className="publicity">{priv}</p>
            </div>
          </div>
          <div className="about">
            <small>{about}</small>
          </div>
        </div>

        <div className="repo__bottom">
          <div className="language">
            <small>{language}</small>
          </div>
        </div>
      </div>

      <div
        id={project}
        style={{ cursor: "pointer" }}
        className={classNames({
          repo: "repo",
          background: "background",
          mobile: "mobile",
        })}
        onClick={() => {
          if (link) {
            window.open(link, "_blank");
          }
        }}
      >
        <div
          id={`${project}-bg`}
          className="repo__bg"
          style={{ backgroundImage: "url(" + image + ")" }}
        ></div>

        <div className="repo__top">
          <div className="title">
            <div className="project">{project}</div>
            <div className="public">
              <p className="publicity">{priv}</p>
            </div>
          </div>
          <div className="about">
            <small>{about}</small>
          </div>
          <br />
          <div className="language">
            <small>{language}</small>
          </div>
        </div>

        <div className="repo__bottom"></div>
      </div>
    </>
  );
};

export default Repo;
