import "./Modal.css";
import ReactDOM from "react-dom";

function Modal({ children, closemodal }) {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      {/* malumotni olish */}
      <div className="modal">
        {children}
        <br />
        <button onClick={closemodal}>close</button>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
