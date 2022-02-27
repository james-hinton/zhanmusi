import Pokeball from "../assets/pokeball.png";

const DropdownItem = ({ title, setSearchText }) => {
  function handleClick() {
    setSearchText(title);
  }

  return (
    <>
      <div onClick={handleClick} className="dropdown__item">
        <div className="dropdown__item-image-container">
          <img className="dropdown__item-image" src={Pokeball} />
        </div>
        <div className="dropdown__item-text">
          <p>{title}</p>
        </div>
      </div>
    </>
  );
};

export default DropdownItem;
