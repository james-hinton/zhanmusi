import classNames from "classnames";
import { useEffect, useState, useContext, useCallback } from "react";
import { CursorContext } from "./CursorContextProvider";
import "../assets/styles/Repo.css";

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

  return (
    <>
      <div
        style={{ backgroundImage: bgImage, cursor: "pointer" }}
        className={classNames({
          repo: "repo",
          background: background,
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
    </>
  );
};

export default Repo;
