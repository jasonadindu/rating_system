import { FaReact } from "react-icons/fa";

const Dialog = ({ open, setShowDialog }) => {
  return (
    <div className={`dialog-container ${open && "open"}`}>
      <div className="dialog">
        <span className="icon">
          <FaReact />
        </span>
        <h2>React is awesome.</h2>
        <p>
          lorem ipsum dolor sit et due, coniet, purpose, dragons njskjnlgskangj
        </p>
        <button
          className="close-btn"
          onClick={() => {
            console.log("working");
            setShowDialog(false);
          }}
        >
          Close Dialog
        </button>
      </div>
    </div>
  );
};

export default Dialog;
