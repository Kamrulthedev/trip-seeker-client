import support from "../../../assets/icon/maintenance.png";
import shield from "../../../assets/icon/security.png";
import truck from "../../../assets/icon/shipped.png";
import bg from "../../../assets/images/banner/whyChooseBanner.jpg";
import WhyChooseItem from "../whyChoose/WhyChooseItem";

const ReasonsToShop = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-slate-950 bg-blend-overlay bg-opacity-50 bg-cover bg-center bg-no-repeat  text-slate-50 md:my-20 my-10"
    >
      <div className="container mx-auto md:py-20 py-10">
        <div className="relative flex flex-col justify-center items-center mb-20">
          <h1
            className={`text-center text-white   text-3xl capitalize tracking-wide`}
          >
            Reasons to Shop with us
          </h1>
          <div className="w-24 h-0.5 bg-primary"></div>
        </div>
        <div className="md:flex items-center justify-between gap-5 space-y-5 md:space-y-0 md:divide-x divide-y md:divide-y-0">
          <WhyChooseItem
            icon={truck}
            title="Fast National & International Delivery"
          />
          <WhyChooseItem icon={shield} title="Secure Checkout Our Partners" />
          <WhyChooseItem
            icon={support}
            title="Fast And Free Customer Support"
          />
        </div>
      </div>
    </div>
  );
};

export default ReasonsToShop;
