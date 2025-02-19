import letter from "../../assets/icon/business.png";
const Newsletter = () => {
  return (
    <section className="border-t border-gray-300">
      <div className="container mx-auto md:grid grid-cols-12  py-4 ">
        <div className="md:col-span-3 col-span-6 flex items-end gap-4 md:border-r border-gray-300  py-2">
          <img src={letter} alt="news letter" className="size-16" />
          <h3 className="uppercase text-lg font-semibold">
            Sign up <br className="hidden md:inline-block" />
            for newsletter
          </h3>
        </div>
        <p className="md:col-span-4 col-span-6 text-gray-700 flex justify-center items-center md:text-right md:border-0 border-b border-gray-300 pb-2 md:pb-0">
          Subscribe to the weekly newsletter for all the latest updates
        </p>
        <form className="md:col-span-5 col-span-12 md:ml-10 mt-5 md:mt-0 flex justify-center items-center">
          <input
            type="email"
            required
            placeholder="Enter your email..."
            className="bg-gray-100 w-2/3 outline-none h-12 px-5 text-gray-700"
          />
          <button className="bg-black text-white w-1/3 h-12 hover:bg-primary transition-all ease-in-out duration-300 font-semibold">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
