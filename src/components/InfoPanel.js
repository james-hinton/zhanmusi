import "../assets/styles/InfoPanel.css";

const InfoPanel = ({ title, value }) => {
  return (
    <>
      <div className="infopanel">
        <p className="infopanel--title">{title}</p>
        <p className="infopanel--value">{value}</p>
      </div>
    </>
  );
};

export default InfoPanel;
