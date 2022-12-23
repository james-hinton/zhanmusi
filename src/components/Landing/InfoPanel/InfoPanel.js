// Styles
import "./InfoPanel.css";

const InfoPanel = ({ title, value, link }) => {
  return (
    <>
      <div className="infopanel">
        <p className="infopanel--title">{title}</p>
        <p className="infopanel--value">
          {link ? (
            <a
              href={link}
              rel="noreferrer"
              style={{
                textDecoration: "none",
                textDecorationLine: "none",
                textDecorationStyle: "none",
                color: "black",
              }}
            >
              {value}
            </a>
          ) : (
            value
          )}
        </p>
      </div>
    </>
  );
};

export default InfoPanel;
