import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi2";
import { Dialog, DialogContent, DialogOverlay } from "../ui/dialog";
import thumbnailUrl from "../../assets/Winners-new.jpg"

const ProductQuickViewModal = () => {
  const stock = 45;

  return  (
    <Dialog>
      <DialogOverlay />
      <DialogContent className="w-screen grid grid-cols-2 space-x-3">
        <div>
          <img src={thumbnailUrl} alt="" />
          <div className="grid grid-cols-3 gap-4 mt-2">
            {Array.from({ length: 3 }).map((_, index) => (
              <img
                key={index}
                src={thumbnailUrl}
                alt=''
              />
            ))}
          </div>
        </div>
        <div>
          <div className="border-b border-gray-300 pb-4">
            <h2 className="text-xl font-bold pb-1">Kamrul</h2>
            <p>
              {stock > 0 ? (
                <span>{stock} In stock</span>
              ) : (
                <span className="text-rose-600">Out of stock</span>
              )}
            </p>
            <p className="text-primary">$5000 USD</p>
          </div>
          <p className="pt-4 text-gray-700">kamrul this is kamrul</p>
          <div className="flex items-center mt-10 gap-6 ">
            <div className="border-2 border-gray-300  font-bold text-xl flex items-center space-x-2">
              <span className="px-3 w-10">34</span>
              <div className="flex flex-col items-center border-l border-gray-300 ">
                <button
                  className="px-3 py-0.5 border-b border-gray-300  hover:text-primary"
                >
                  <HiOutlinePlus />
                </button>
                <button
                  className="px-3 py-0.5  hover:text-primary"
                >
                  <HiOutlineMinus />
                </button>
              </div>
            </div>
            <div>
              <button>Kamrul hassan</button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default ProductQuickViewModal;
