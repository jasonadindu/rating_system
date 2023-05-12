import { FaStar } from "react-icons/fa";

const Star = ({ rating, pos, updateRating }) => {

    
  return (
    <button
      className={`star ${rating !== 0  && pos <= rating ? "rated" : ""}`}
      onClick={() => {
        console.log(rating);
        console.log(pos);
        updateRating(pos);
      }}
    >
      <FaStar />
    </button>
  );
};

export default Star;
