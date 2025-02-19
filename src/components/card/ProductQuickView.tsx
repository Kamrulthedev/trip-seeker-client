import { useEffect, useState } from "react";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi2";
import { toast } from "sonner";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { closeQuickViewModal } from "../../redux/features/quickViewProduct/quickViewSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IProduct } from "../../types/product.type";
import BtnAddToCart from "../ui/BtnAddToCart";
import { Dialog, DialogContent, DialogOverlay } from "../ui/dialog";
import PrimaryLoader from "../ui/loader/PrimaryLoader";

const ProductQuickViewModal = () => {
  const { isOpen, product, isLoading, onClose } = useAppSelector(
    (state) => state.quickView
  );
  const { _id, stock, name, price, description, image, thumbnail } =
    product as IProduct;

  const [quantity, setQuantity] = useState(1);
  const [thumbnailUrl, setThumbnailUrl] = useState(thumbnail);

  const { cartItems } = useAppSelector((state) => state.cart);
  const inCart = cartItems.find((item) => item.id === _id);

  useEffect(() => {
    setThumbnailUrl(thumbnail);
  }, [thumbnail]);

  const dispatch = useAppDispatch();

  const handleAddToCart = (product: IProduct) => {
    dispatch(addToCart({ ...product, id: product?._id, quantity }));
  };

  const handleClose = () => {
    dispatch(closeQuickViewModal());
    onClose();
  };
  const handleIncrementQuantity = () => {
    if (stock <= quantity) {
      toast.warning("Out of stock");
    } else {
      setQuantity(quantity + 1);
    }
  };
  return isLoading ? (
    <PrimaryLoader />
  ) : (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogOverlay />
      <DialogContent className="w-screen grid grid-cols-2 space-x-3">
        <div>
          <img src={thumbnailUrl} alt={name} />
          <div className="grid grid-cols-3 gap-4 mt-2">
            {Array.from({ length: 3 }).map((_, index) => (
              <img
                onClick={() => setThumbnailUrl(image)}
                key={index}
                src={image}
                alt={name}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="border-b border-gray-300 pb-4">
            <h2 className="text-xl font-bold pb-1">{name}</h2>
            <p>
              {stock > 0 ? (
                <span>{stock} In stock</span>
              ) : (
                <span className="text-rose-600">Out of stock</span>
              )}
            </p>
            <p className="text-primary">${price} USD</p>
          </div>
          <p className="pt-4 text-gray-700">{description}</p>
          <div className="flex items-center mt-10 gap-6 ">
            <div className="border-2 border-gray-300  font-bold text-xl flex items-center space-x-2">
              <span className="px-3 w-10">{quantity}</span>
              <div className="flex flex-col items-center border-l border-gray-300 ">
                <button
                  onClick={handleIncrementQuantity}
                  className="px-3 py-0.5 border-b border-gray-300  hover:text-primary"
                >
                  <HiOutlinePlus />
                </button>
                <button
                  disabled={quantity <= 1}
                  onClick={() => setQuantity(quantity - 1)}
                  className="px-3 py-0.5  hover:text-primary"
                >
                  <HiOutlineMinus />
                </button>
              </div>
            </div>
            <div onClick={() => handleAddToCart(product as IProduct)}>
              <BtnAddToCart
                title={
                  inCart
                    ? "Already in cart"
                    : stock <= 0
                    ? "Out of stock"
                    : "Add to cart"
                }
                disable={inCart ? true : false || stock <= 0}
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default ProductQuickViewModal;
