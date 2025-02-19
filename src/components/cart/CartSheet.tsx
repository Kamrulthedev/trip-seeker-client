/* eslint-disable @typescript-eslint/no-explicit-any */
import { FiShoppingBag } from "react-icons/fi";
import {
  HiOutlineMinus,
  HiOutlinePlus,
  HiOutlineShoppingCart,
  HiOutlineTrash,
} from "react-icons/hi2";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
export function CartSheet() {
  const { totalItems, total, cartItems } = useAppSelector(
    (state) => state.cart
  );
  const dispatch = useAppDispatch();

  const handleIncrementQuantity = (item: any) => {
    if (item.quantity === item.stock) {
      toast.warning("Out of stock");
    } else {
      dispatch(incrementQuantity(item));
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative">
          <HiOutlineShoppingCart />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 inline-flex items-center rounded-full  px-1 py-0.5 h-fit w-fit text-xs font-medium bg-primary text-white">
              {totalItems}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="md:w-[29rem] overflow-hidden bg-gray-100">
        <SheetHeader className="border-b">
          <div className="flex items-center text-2xl">
            <p className="px-4 py-2 border-r w-12">{totalItems}</p>
            <p className="px-4 py-2 text-center w-[77%] border-r">
              Shopping Cart
            </p>
          </div>
        </SheetHeader>
        {totalItems <= 0 ? (
          <div className=" border-gray-300  text-rose-600 h-96 flex flex-col justify-center items-center text-xl space-y-4">
            <p>Your cart is currently empty!</p>
            <SheetClose asChild>
              <Link
                to="/products"
                className="bg-gray-950  text-white py-3 rounded-sm px-5 flex items-center justify-center gap-2 uppercase  hover:bg-primary transition-all ease-in-out duration-300 text-base"
              >
                Go To Shop <FiShoppingBag size={22} />
              </Link>
            </SheetClose>
          </div>
        ) : (
          <>
            <div className="p-2">
              {cartItems.map((item) => (
                <div className="grid grid-cols-12 items-center border-b p-2 rounded-md bg-white">
                  <aside className="col-span-9 flex items-center gap-4">
                    <img src={item.image} alt="" className="size-24" />
                    <div className="space-y-1">
                      <Link to={`/products/${item.id}`}>
                        <h3 className="text-lg hover:text-primary transition-all">
                          {item.name}
                        </h3>
                      </Link>
                      <h3>QTY: {item.quantity}</h3>
                      <p>${item.price}.00</p>
                    </div>
                  </aside>
                  <div className="col-span-2 flex flex-col items-center w-12 border ">
                    <button
                      onClick={() => handleIncrementQuantity(item)}
                      className="px-4 py-1 border-b hover:text-primary"
                    >
                      <HiOutlinePlus />
                    </button>
                    <button
                      disabled={item.quantity === 1}
                      onClick={() => dispatch(decrementQuantity(item))}
                      className="px-4 py-1  hover:text-primary"
                    >
                      <HiOutlineMinus />
                    </button>
                  </div>
                  <button
                    className="col-span-1"
                    onClick={() => dispatch(removeFromCart(item))}
                  >
                    <HiOutlineTrash />
                  </button>
                </div>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-0 w-full">
              <div className="flex items-center justify-between bg-white text-xl font-semibold px-4 py-5">
                <p>Total:</p>
                <p className="text-primary">${total}.00</p>
              </div>
              <div className="flex items-center justify-between">
                <SheetClose asChild>
                  <Link
                    to="/cart"
                    className="bg-gray-900 -mx-2 text-white p-4 w-full flex items-center justify-center gap-2 uppercase  hover:bg-primary transition-all ease-in-out duration-300"
                  >
                    View Cart <HiOutlineShoppingCart size={22} />
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    to="/checkout"
                    className="bg-gray-950 -mx-1 text-white p-4 w-full flex items-center justify-center gap-2 uppercase  hover:bg-primary transition-all ease-in-out duration-300"
                  >
                    Check Out <MdOutlineShoppingCartCheckout size={22} />
                  </Link>
                </SheetClose>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
