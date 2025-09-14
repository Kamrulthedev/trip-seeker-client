/* eslint-disable @typescript-eslint/no-explicit-any */
import { MouseEvent, useState } from "react";
import { IProduct } from "../../types";

export interface IProductCardProps {
  productDetails: IProduct;
}

const useNavigate = () => {
  return (path: string) => {
    console.log(`Navigating to: ${path}`);
  };
};

// Mock Link component
const Link = ({ to, children, className, title }: { to: string; children: React.ReactNode; className?: string; title?: string }) => (
  <a href={to} className={className} title={title} onClick={(e) => e.preventDefault()}>
    {children}
  </a>
);

// Mock toast notification
const toast = {
  success: (message: string) => console.log(`Toast Success: ${message}`),
};

const useAppDispatch = () => {
  return (action: any) => console.log("Dispatching action:", action);
};

const useAppSelector = (selector: (state: any) => any) => {
  const mockState = {
    cart: {
      cartItems: [],
    },
  };
  return selector(mockState);
};

// Mock action creators
const addToCart = (product: any) => ({
  type: 'cart/addToCart',
  payload: product,
});

const openQuickViewModal = (payload: any) => ({
  type: 'quickViewProduct/openQuickViewModal',
  payload,
});

const closeQuickViewModal = () => ({
  type: 'quickViewProduct/closeQuickViewModal',
});

// Mock ProductQuickViewModal component
const ProductQuickViewModal = () => {
  const [isOpen, setIsOpen] = useState(false); 

  // Mock quickView state from Redux
  const quickViewProduct = {
    product: null,
    isOpen: isOpen,
    onClose: () => setIsOpen(false),
  };


  if (quickViewProduct.isOpen && quickViewProduct.product) {
    console.log("Mock Quick View Modal is open for product:", quickViewProduct.product);
  }

  return (
    null
  );
};

// Check Badge Icon
const CheckBadgeIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 00-1.162-.936l-3.336 4.17-1.472-1.473a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l4-5z" />
  </svg>
);

// Heart Icon
const HeartIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

// Magnifying Glass Icon
const MagnifyingGlassIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

// Shopping Cart Icon
const ShoppingCartIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

// Empty Icon (Placeholder for PiEmpty)
const EmptyIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 14.5c.5-1.5 1-2 1-2 0-2-1.5-4-3-4-1.5 0-3 2-3 4 0 0 .5.5 1 2M11 15c0-2-1-4-3-4s-3 2-3 4c0 0 .5.5 1 2M10 20v-2"></path>
    <circle cx="12" cy="12" r="10"></circle>
  </svg>
);
// --- End Inline SVG Icons ---


const ProductCard = ({ productDetails }: IProductCardProps) => {
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector((state) => state.cart);
  // Destructure with imageUrl instead of thumbnail
  const { _id, name, price, imageUrl, discount } = productDetails || {};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inCart = cartItems.find((item: any) => item.id === productDetails?._id); // Cast item to any for mock

  const navigate = useNavigate();
  const handleOpenModal = (product: IProduct) => {
    dispatch(
      openQuickViewModal({
        product: product,
        onClose: () => dispatch(closeQuickViewModal()),
      })
    );
  };

  const handleAddToCart = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.stopPropagation();
    if (!inCart) {
      dispatch(
        addToCart({
          ...productDetails,
          id: productDetails?._id,
          quantity: 1,
        })
      );
      toast.success("Added to cart");
    }
  };
  const handleQuickView = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.stopPropagation();
    handleOpenModal(productDetails);
  };


  const stock = 45;


  return (
    <>
      <ProductQuickViewModal />
      <div>
        <div className="relative group overflow-hidden">
          {/* Use imageUrl instead of thumbnail */}
          <img src={imageUrl} alt={name} className="w-full h-auto object-cover" /> {/* Added alt and h-auto for better image handling */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-slate-950/40 transition-transform ease-in-out duration-300 transform scale-0 group-hover:scale-100 origin-center cursor-pointer"
            onClick={() => navigate(`/products/${_id}`)}
            title="View Details"
          >
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center gap-2">
              {inCart ? (
                <button
                  disabled
                  className="bg-white rounded-full p-2 hover:bg-primary hover:text-white text-xl tooltip transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-500 delay-500"
                >
                  <CheckBadgeIcon size={24} /> {/* Replaced HiMiniCheckBadge with CheckBadgeIcon */}
                  <span className="tooltiptext">Already in cart</span>
                </button>
              ) : (
                <button
                  onClick={(e) => handleAddToCart(e)}
                  disabled={stock && stock <= 0} // Check if stock exists and is <= 0
                  className="bg-white rounded-full p-2 hover:bg-primary hover:text-white text-xl tooltip transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-500 delay-300"
                >
                  {(stock === undefined || stock > 0) ? ( // Render cart icon if stock is undefined (not provided) or > 0
                    <ShoppingCartIcon /> 
                  ) : (
                    <EmptyIcon className="cursor-not-allowed" /> 
                  )}
                  <span className="tooltiptext">
                    {(stock === undefined || stock > 0) ? "Add to cart" : "Out of stock"}
                  </span>
                </button>
              )}

              <button
                onClick={(e) => handleQuickView(e)}
                className="bg-white rounded-full p-2 hover:bg-primary hover:text-white text-xl tooltip transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-500 delay-400"
              >
                <MagnifyingGlassIcon /> {/* Replaced HiOutlineMagnifyingGlass with MagnifyingGlassIcon */}
                <span className="tooltiptext">QuickView</span>
              </button>
              <button className="bg-white rounded-full p-2 hover:bg-primary hover:text-white text-xl tooltip transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-500 delay-500">
                <HeartIcon /> {/* Replaced HiOutlineHeart with HeartIcon */}
                <span className="tooltiptext">Add to Wishlist</span>
              </button>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-700 mt-6">
          <Link
            to={`/products/${_id}`}
            className="text-lg hover:text-primary transition-all "
            title="View Details"
          >
            {name}
          </Link>
          <p className="text-primary">${price}
            {discount && ( // Conditionally display discount if it exists
              <span className="ml-2 text-sm bg-green-500 text-white px-2 py-1 rounded-full">{discount} Off</span>
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;