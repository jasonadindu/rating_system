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
        Thank you so much for taking the time to leave an excellent rating. We really appreciate your business. Please let us know what we can do for you in the future.
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
