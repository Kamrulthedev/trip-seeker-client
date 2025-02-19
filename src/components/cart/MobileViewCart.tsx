/* eslint-disable @typescript-eslint/no-explicit-any */
import { HiOutlineMinus } from "react-icons/hi";
import { HiOutlinePlus, HiOutlineTrash } from "react-icons/hi2";
import { Link } from "react-router-dom";
import {
  decrementQuantity,
  removeFromCart,
} from "../../redux/features/cart/cartSlice";
import { useAppDispatch } from "../../redux/hooks";

const MobileViewCart = ({
  item,
  handleIncrementQuantity,
}: {
  item: any;
  handleIncrementQuantity: any;
}) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="border-b md:hidden border-gray-300">
        <div className="flex items-center  gap-4 p-2 ">
          <img src={item.image} alt="" className="size-20" />
          <p className="text-lg hover:text-primary transition-all">
            <Link to={`/products/${item.id}`}>{item.name}</Link>
          </p>
        </div>
        <div className="flex items-center justify-between  gap-2 p-2">
          <p>
            Price <br /> ${item.price}.00
          </p>
          <div className=" border border-gray-300  text-lg flex items-center justify-center space-x-2   shadow-md">
            <span className="px-2 "> {item.quantity}</span>
            <div className="flex flex-col items-center border-l border-gray-300 ">
              <button
                onClick={() => handleIncrementQuantity(item)}
                className="px-2 py-0.5 border-b border-gray-300  hover:text-primary"
              >
                <HiOutlinePlus />
              </button>
              <button
                disabled={item.quantity === 1}
                onClick={() => dispatch(decrementQuantity(item))}
                className="px-2 py-0.5  hover:text-primary"
              >
                <HiOutlineMinus />
              </button>
            </div>
          </div>
          <p>
            Sub Total <br />${item.quantity * item.price}.00
          </p>
          <button
            className=" text-lg hover:text-primary flex justify-center items-center"
            onClick={() => dispatch(removeFromCart(item))}
          >
            <HiOutlineTrash />
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileViewCart;
