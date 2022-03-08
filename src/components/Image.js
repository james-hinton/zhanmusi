import "../assets/styles/Image.css";
import classNames from "classnames";

const Image = ({ image, circle, logo, height, margin, link }) => {
  return (
    <>
      <img
        src={image}
        height={height}
        className={classNames({
          circle: circle,
          logo: logo,
          margin: margin,
        })}
        onClick={link ? () => window.open(link) : null}
      />
    </>
  );
};

export default Image;
