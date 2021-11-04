import { useDispatch } from "react-redux";
import { removeReservation } from "../features/reservationSlice";

const ReservationCard = ({ name, index }) => {
  const dispatch = useDispatch();

  const handleRemoveReservation = () => {
    dispatch(removeReservation(index));
  };

  return (
    <div>
      <div
        onClick={handleRemoveReservation}
        className="reservation-card-container"
      >
        {name}
      </div>
    </div>
  );
};

export default ReservationCard;
