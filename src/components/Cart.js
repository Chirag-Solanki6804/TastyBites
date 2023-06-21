import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import FoodItem from "./FoodItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="mb-96 mt-6">
      <div className="flex items-center justify-center">
        <div className="h-10 w-2/3  flex justify-between">
          <span className="font-mono text-2xl">Cart-({cartItems.length})</span>
          <button
            className="w-24 h-6 bg-red-500 rounded-md text-sm font-mono"
            onClick={() => handleClearCart()}
          >
            Clear Cart
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        {console.log(cartItems)}
        {cartItems.map((item) => (
          <FoodItem key={item?.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;