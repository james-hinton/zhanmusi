// Styles
import "./style.scss";

const Modal = ({ setShowModal, showModal }) => {
  const toggle = () => setShowModal(!showModal);

  const handleClick = (e) => {
    if (e.target.classList.contains("modal")) {
      toggle();
    }
  };

  return (
    <div className={showModal ? "modal modal-active" : "modal"} onClick={handleClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>Contact</h2>
          <span className="close" onClick={toggle}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <p>
            Email :{" "}
            <a href="mailto:hello@james-hinton.com">hello@james-hinton.com</a>
          </p>
          <p>
            <small>
              <i>
                Please don't sign me up to any mailing lists! <br />
                For use for partnering up on a cool project, job availability
                request or funny memes.
              </i>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
