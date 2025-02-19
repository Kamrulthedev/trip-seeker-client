/* eslint-disable @typescript-eslint/no-explicit-any */
import { HiOutlineMinus, HiOutlinePlus, HiOutlineTrash } from "react-icons/hi";
import { Link } from "react-router-dom";
import {
  decrementQuantity,
  removeFromCart,
} from "../../redux/features/cart/cartSlice";
import { useAppDispatch } from "../../redux/hooks";

const GridViewCart = ({
  item,
  handleIncrementQuantity,
}: {
  item: any;
  handleIncrementQuantity: any;
}) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div
        className="hidden md:grid grid-cols-12 items-center border-b border-gray-300"
        key={item.id}
      >
        <div className="col-span-5 flex items-center gap-4 p-2 ">
          <img src={item.image} alt="" className="size-24" />
          <p className="text-lg hover:text-primary transition-all">
            <Link to="">{item.name}</Link>
          </p>
        </div>
        <p className="col-span-2 p-3 text-center text-lg">${item.price}.00</p>
        <div className="col-span-2 border border-gray-300  text-lg flex items-center justify-center space-x-2 w-24 mx-auto shadow-md">
          <span className="px-3 w-10">{item.quantity}</span>
          <div className="flex flex-col items-center border-l border-gray-300 ">
            <button
              onClick={() => handleIncrementQuantity(item)}
              className="px-3 py-0.5 border-b border-gray-300  hover:text-primary"
            >
              <HiOutlinePlus />
            </button>
            <button
              disabled={item.quantity === 1}
              onClick={() => dispatch(decrementQuantity(item))}
              className="px-3 py-0.5  hover:text-primary"
            >
              <HiOutlineMinus />
            </button>
          </div>
        </div>
        <p className="col-span-2 p-3 text-center text-lg">
          ${item.quantity * item.price}.00
        </p>
        <button
          className="col-span-1 text-center p-3 text-lg hover:text-primary flex justify-center items-center"
          onClick={() => dispatch(removeFromCart(item))}
        >
          <HiOutlineTrash />
        </button>
      </div>
    </>
  );
};

export default GridViewCart;
