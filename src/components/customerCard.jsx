import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCustomerFood } from "../features/customerSlice";

const CustomerCard = ({ id, name, food }) => {
  const [customerFoodInput, setCustomerFoodInput] = useState("");
  const dispatch = useDispatch();

  const handleAddCustomerFood = () => {
    dispatch(
      addCustomerFood({
        id,
        food: customerFoodInput,
      })
    );

    setCustomerFoodInput("");
  };

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((food) => {
            return <p>{food}</p>;
          })}
        </div>
        <div className="customer-food-input-container">
          <input
            value={customerFoodInput}
            onChange={(e) => setCustomerFoodInput(e.target.value)}
          />
          <button onClick={handleAddCustomerFood}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
