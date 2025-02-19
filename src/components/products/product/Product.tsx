/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiOutlinePlus } from "react-icons/hi";
import { HiOutlineHeart, HiOutlineMinus } from "react-icons/hi2";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import fire from "../../../assets/icon/fire.png";
import {
  addToCart,
  incrementQuantity,
} from "../../../redux/features/cart/cartSlice";
import { useGetProductQuery } from "../../../redux/features/product/productApi";
import { useAppSelector } from "../../../redux/hooks";
import { IProduct } from "../../../types/product.type";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../ui/breadcrumb";
import BtnAddToCart from "../../ui/BtnAddToCart";
import PrimaryLoader from "../../ui/loader/PrimaryLoader";
import Progressbar from "../../ui/Progressbar";
import Features from "./Features";
import ProductDetailsDescription from "./ProductDetailsDescription";
import RelatedProduct from "./RelatedProduct";
const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useGetProductQuery(id as string);
  //@ts-ignore
  const product = (data?.data as IProduct) || {};

  // Destructure properties directly from the product
  const {
    _id,
    name,
    image,
    price,
    description,
    thumbnail,
    stock,
    category,
    subcategory,
  } = product;
  const { cartItems } = useAppSelector((state) => state.cart);
  const inCart = cartItems.find((item) => item.id === _id);

  const dispatch = useDispatch();

  const [thumbnailUrl, setThumbnailUrl] = useState(thumbnail);
  useEffect(() => {
    setThumbnailUrl(thumbnail);
  }, [thumbnail]);

  const handleIncrementQuantity = () => {
    if (stock <= quantity) {
      toast.warning("Out of stock");
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = (product: IProduct) => {
    if (stock <= 0) {
      toast.warning("Out of stock");
      return;
    }

    if (inCart) {
      if (inCart.quantity === stock) {
        toast.warning("Out of stock");
      } else {
        dispatch(incrementQuantity(inCart));
        toast.success("Added to cart");
      }
    } else {
      dispatch(addToCart({ ...product, id: product?._id, quantity }));
      toast.success("Added to cart");
    }
  };
  const handleBuyItNow = (product: IProduct) => {
    if (stock <= 0) {
      toast.warning("Out of stock");
    } else if (inCart) {
      navigate("/checkout");
    } else {
      handleAddToCart(product);
      navigate("/checkout");
    }
  };
  return (
    <section>
      {isLoading && <PrimaryLoader />}
      <Breadcrumb className="my-5 md:py-6 py-3 bg-gray-100">
        <BreadcrumbList className="container mx-auto">
          <BreadcrumbItem className="md:text-xl text-lg text-black">
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-black text-2xl" />
          <BreadcrumbItem className="md:text-xl text-lg text-black">
            <BreadcrumbLink asChild>
              <Link to="/products">Products</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-black md:text-2xl" />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-primary md:text-xl text-lg">
              {name}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="relative container mx-auto md:grid grid-cols-12 gap-24 mt-4 mb-8 ">
        <aside className="col-span-6 grid grid-cols-12 gap-4">
          <div className="col-span-3 space-y-4 gap-4">
            {Array.from({ length: 2 }).map((_, index) => (
              <img
                onClick={() => setThumbnailUrl(image)}
                key={index}
                src={image}
                alt={name}
                className={`${
                  thumbnailUrl === image ? "border" : ""
                } border-primary cursor-pointer transition-all duration-300`}
              />
            ))}
            <img
              src={thumbnail}
              alt=""
              onClick={() => setThumbnailUrl(thumbnail)}
              className={`${
                thumbnailUrl === thumbnail ? "border" : ""
              } border-primary cursor-pointer transition-all `}
            />
          </div>
          <img src={thumbnailUrl} alt={name} className="col-span-9" />
        </aside>
        <aside className="col-span-6">
          <div className="border-b border-gray-300 md:pb-8 pb-4 md:mb-8 mb-4 flex items-center justify-between">
            <div className="mt-4 md:mt-0">
              <h2 className="md:text-2xl text-xl font-bold pb-1">{name}</h2>
              <p className="text-primary md:text-2xl text-xl">${price} USD</p>
            </div>

            <button className="tooltip hover:translate-y-0 group-hover:opacity-100 transition-transform duration-500 delay-500 size-10 border border-gray-300 rounded-full hover:bg-primary hover:text-white hover:border-0">
              <HiOutlineHeart className="w-full flex justify-center items-center text-xl" />
              <span className="tooltiptext">Add to Wishlist</span>
            </button>
          </div>
          <p className=" text-gray-700 text-justify md:text-base text-sm">
            {description}
          </p>

          {stock > 0 && 40 > stock ? (
            <>
              <div className="flex items-center gap-2 text-2xl mt-5 mb-2">
                <img src={fire} alt="fire" className="size-10" />
                <p className="text-[#ef1c1c]/90">
                  Hurry! Only <span className="text-[#ef1c1c]">{stock}</span>{" "}
                  left in stock
                </p>
              </div>
              <Progressbar />
            </>
          ) : (
            <p className="text-lg  text-slate-950 font-bold mt-5">
              {stock > 0 ? (
                <span>{stock} In stock</span>
              ) : (
                <span className="text-[#ef1c1c] ">Out of stock</span>
              )}
            </p>
          )}

          <p className="text-slate-950 font-bold md:text-lg flex flex-wrap gap-4 mt-2">
            <Link to={""} className="hover:text-primary transition-all">
              Size Guide
            </Link>
            <Link to={""} className="hover:text-primary transition-all">
              Delivery & Return
            </Link>
            <Link to={""} className="hover:text-primary transition-all">
              Ask a Question
            </Link>
          </p>
          <div className="flex flex-wrap items-center md:mt-8 mt-4 gap-6 ">
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
                className="w-full"
                title={
                  inCart
                    ? "Already in cart"
                    : stock <= 0
                    ? "Out of stock"
                    : "Add to cart"
                }
                disable={stock <= 0}
              />
            </div>
            <button
              onClick={() => handleBuyItNow(product as IProduct)}
              className="rounded-sm w-full md:w-fit text-white px-6 py-3.5 flex items-center justify-center gap-2 uppercase bg-black transition-all ease-in-out duration-300 group"
            >
              Buy It Now
              <MdOutlineShoppingCartCheckout
                size={22}
                className="group-hover:ml-5 transition-all  ease-in-out duration-300"
              />
            </button>
          </div>
          <div className="border-t border-gray-300 mt-8">
            <h5 className="text-slate-950 font-semibold text-lg mt-4">
              Real time <span className="text-primary">1</span> Visitor right
              now
            </h5>
            <h5>
              <span className="text-slate-950 font-semibold text-lg">
                Category:
              </span>{" "}
              <span className="text-slate-700">
                {category}, {subcategory}
              </span>
            </h5>
          </div>
        </aside>
      </div>
      <Features />
      <ProductDetailsDescription />
      <div className="border-y border-gray-300 flex justify-center items-center gap-2 my-4 p-2">
        <Link
          to=""
          target="_blank"
          className="size-10 border rounded-full flex justify-center items-center hover:text-white hover:bg-primary transition-all hover:border-primary"
        >
          <FaFacebookF />
        </Link>
        <Link
          to=""
          target="_blank"
          className="size-10 border rounded-full flex justify-center items-center hover:text-white hover:bg-primary transition-all hover:border-primary"
        >
          <FaTwitter />
        </Link>
        <Link
          to=""
          target="_blank"
          className="size-10 border rounded-full flex justify-center items-center hover:text-white hover:bg-primary transition-all hover:border-primary"
        >
          <FaInstagram />
        </Link>
      </div>
      <RelatedProduct />
    </section>
  );
};

export default Product;
