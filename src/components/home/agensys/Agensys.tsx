/* eslint-disable @typescript-eslint/no-explicit-any */
// import required modules
import agensy1 from "../../../assets/images/Agensys/1.png";
import agensy2 from "../../../assets/images/Agensys/2.png";
import agensy3 from "../../../assets/images/Agensys/3.png";
import agensy4 from "../../../assets/images/Agensys/4.png";
import agensy5 from "../../../assets/images/Agensys/5.png";


import Marquee from "react-fast-marquee";
import { motion } from 'framer-motion';



const Agensys = () => {
  const brandImages: any = [agensy1, agensy2, agensy3, agensy4, agensy5, agensy1, agensy2, agensy3, agensy4, agensy5];

  return (
    <motion.div
      className="py-16 sm:py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 sm:text-4xl">
            Trusted by World-Class Agencies
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We are proud to collaborate with some of the best in the industry.
          </p>
        </div>

        {/* Wrapper to control width and center the marquee */}
        <div className="w-full md:w-5/6 lg:w-3/4 mx-auto p-4 rounded-2xl bg-gradient-to-r from-blue-200 to-green-200 shadow-inner border border-gray-200/80">
          <Marquee
            pauseOnHover={true}
            speed={60}
            gradient={true}
            gradientColor="rgba(248, 250, 252, 0)"
            gradientWidth={50}
          >
            {brandImages.map((brand: any, index: any) => (
              <div key={index} className="mx-8">
                <div className="group flex h-28 w-40 items-center justify-center rounded-lg bg-transparent p-4 transition-all duration-300">
                  <img
                    src={brand}
                    alt={`Brand logo ${index + 1}`}
                    className="max-h-20 w-full object-contain filter grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </motion.div>
  );
};

export default Agensys;