import { FaSearch } from "react-icons/fa";

import "./style.scss";

const PrimevalNavbar = () => {
  return (
    <div className="primeval-navbar">
      <a href="/" className="primeval-navbar-brand">
        Primeval Traces
      </a>
      <div className="primeval-navbar-search">
        <FaSearch />
      </div>
    </div>
  );
};

export default PrimevalNavbar;
