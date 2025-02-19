import { GoShieldCheck } from "react-icons/go";
import { PiSealCheckLight } from "react-icons/pi";
import { SlPlane } from "react-icons/sl";
import { TbTruckReturn } from "react-icons/tb";

const Features = () => {
  return (
    <>
      <div className="container mx-auto  grid md:grid-cols-4 gap-5">
        <div className="border border-gray-300 flex flex-col justify-center items-center w-full py-5 gap-y-3">
          <SlPlane className="text-primary text-4xl" />
          <p className=" tracking-widest uppercase">WORLDWIDE SHIPPING</p>
        </div>
        <div className="border border-gray-300 flex flex-col justify-center items-center w-full py-5 gap-y-3">
          <TbTruckReturn className="text-primary text-4xl" />
          <p className=" tracking-widest uppercase">FREE 60-DAY RETURNS</p>
        </div>
        <div className="border border-gray-300 flex flex-col justify-center items-center w-full py-5 gap-y-3">
          <PiSealCheckLight className="text-primary text-4xl" />
          <p className=" tracking-widest uppercase">24 MONTH WARRANTY</p>
        </div>
        <div className="border border-gray-300 flex flex-col justify-center items-center w-full py-5 gap-y-3">
          <GoShieldCheck className="text-primary text-4xl" />
          <p className=" tracking-widest uppercase">100% SECURE CHECKOUT</p>
        </div>
      </div>
    </>
  );
};

export default Features;
