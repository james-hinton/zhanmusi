import "./Button.css";

import Contact from "../../Contact";
import { useState } from "react";

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
