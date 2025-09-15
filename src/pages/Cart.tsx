/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../components/ui/breadcrumb";
import { FishOff } from "lucide-react";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import PageCover from "../components/pageCover/PageCover";
import cartImaege from "../assets/images/banner/breadcrumb.jpg"



const Cart = () => {
  
  return (
    <section>
      <PageCover image={cartImaege} title="gggggg"></PageCover>
      <Breadcrumb className="my-5 py-6 bg-gray-100">
        <BreadcrumbList className="container mx-auto">
          <BreadcrumbItem className="text-xl text-black">
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-black text-2xl" />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-primary text-xl">
              Your Shopping Cart
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="relative container mx-auto md:grid grid-cols-12 mt-4 md:mb-20 mb-10 gap-5 space-y-5 md:space-y-0">
        <aside className="col-span-9 ">
          <div className="border-x border-t border-gray-300">
            <div className="hidden md:grid grid-cols-12 border-b border-gray-300  divide-x divide-gray-300 uppercase">
              <p className="col-span-5 p-3">Product Name</p>
              <p className="col-span-2 p-3 text-center">Price</p>
              <p className="col-span-2 p-3 text-center">Quantity</p>
              <p className="col-span-2 p-3 text-center">Total</p>
              <p className="col-span-1 p-3 text-center"></p>
            </div>
            
              <div className=" border-b border-gray-300  text-rose-600 min-h-60 flex flex-col justify-center items-center text-xl space-y-4">
                <p>Your cart is currently empty!</p>
                <Link
                  to="/products"
                  className="bg-gray-950  text-white py-3 rounded-sm px-5 flex items-center justify-center gap-2 uppercase  hover:bg-primary transition-all ease-in-out duration-300 text-base"
                >
                  Go To Shop <FishOff size={22} />
                </Link>
              </div>
          </div>
       
        </aside>
        <aside className="col-span-3">
          <div className="space-y-2">
            <p className="text-lg flex items-center justify-between">
             
            </p>
            <p className="text-lg flex items-center justify-between">
              <span>Shippings</span> <span>$7.00</span>
            </p>
          </div>
          <div className="mt-10">
            <p className="text-lg flex items-center justify-between">
              <span>Total (tax incl.)</span>  
            </p>
          </div>
          <button
            className="rounded-sm mt-5 text-white p-4 w-full flex items-center justify-center gap-2 uppercase bg-primary transition-all ease-in-out duration-300 group"
          >
            Proceed to Check Out
            <MdOutlineShoppingCartCheckout
              size={22}
              className="group-hover:ml-5 transition-all  ease-in-out duration-300"
            />
          </button>
        </aside>
      </div>
    </section>
  );
};

export default Cart;
