const WhyChooseItem = ({ icon, title }: { icon: string; title: string }) => {
  return (
    <div className="flex flex-col items-center gap-1 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  px-5 py-8 hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] transition-all ease-in-out duration-300">
      <img src={icon} alt="Truck Delivery" className="size-16" />
      <h2 className="md:text-2xl text-xl text-center  capitalize text-slate-50 mt-4 mb-2">
        {title}
      </h2>
      <p className="text-slate-300 md:text-lg  text-base text-center">
        On in-stock items ordered by 5:00 PM
      </p>
    </div>
  );
};

export default WhyChooseItem;
