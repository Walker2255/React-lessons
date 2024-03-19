import "./Modal.css";

function Modal(props) {
  return (
    <div className="modal-backdrop">
      {/* malumotni olish */}
      <div className="modal">{props.children}</div>
    </div>
  );
}

export default Modal;
