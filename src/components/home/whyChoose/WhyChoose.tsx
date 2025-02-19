import shield from "../../../assets/icon/secure-shield.png";
import truck from "../../../assets/icon/shipped.png";
import support from "../../../assets/icon/technical-support.png";
import WhyChooseItem from "./WhyChooseItem";
const WhyChoose = () => {
  return (
    <div className="px-[10%] md:flex items-center justify-center gap-5 mt-10 space-y-5 md:space-y-0">
      <WhyChooseItem
        icon={truck}
        title="Fast National & International Delivery"
      />
      <WhyChooseItem icon={shield} title="Secure Checkout Our Partners" />
      <WhyChooseItem icon={support} title="Fast And Free Customer Support" />
    </div>
  );
};

export default WhyChoose;
