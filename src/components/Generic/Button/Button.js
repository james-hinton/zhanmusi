// React
import { useState } from "react";

// Styles
import "./Button.css";

// Components
import Contact from "../../Contact";

const Button = ({ text, contact, className }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <input
        type="button"
        value={text}
        className={`${className} button`}
        onClick={() => {
          setShowModal(true);
        }}
      />
      {contact && <Contact showModal={showModal} setShowModal={setShowModal} />}
    </>
  );
};

export default Button;
