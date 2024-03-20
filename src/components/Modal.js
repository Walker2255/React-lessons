import "./Modal.css";

function Modal({ children, closemodal }) {
  return (
    <div className="modal-backdrop">
      {/* malumotni olish */}
      <div className="modal">
        {children}
        <br />
        <button onClick={closemodal}>close</button>
      </div>
    </div>
  );
}

export default Modal;
