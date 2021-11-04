import { useDispatch } from "react-redux";
import { transferReservation } from "../features/customerSlice";
import { removeReservation } from "../features/reservationSlice";
import { v4 as uuid } from "uuid";

const ReservationCard = ({ name, index }) => {
  const dispatch = useDispatch();

  const handleTransferReservation = () => {
    dispatch(removeReservation(index));

    dispatch(
      transferReservation({
        id: uuid(),
        name,
        food: [],
      })
    );
  };

  return (
    <div>
      <div
        onClick={handleTransferReservation}
        className="reservation-card-container"
      >
        {name}
      </div>
    </div>
  );
};

export default ReservationCard;
