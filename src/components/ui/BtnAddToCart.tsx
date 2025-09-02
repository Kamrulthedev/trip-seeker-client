import { HiShoppingCart } from "react-icons/hi2";
import "./style/BtnAddToCartStyle.css";
const BtnAddToCart = ({
  className,
  title,
  disable = false,
}: {
  className?: string;
  title: string;
  disable?: boolean;
}) => {
  return (
    <button disabled={disable} className={`CartBtn ${className}`}>
      <span className="IconContainer">
        <HiShoppingCart size={24} className="text-white" />
      </span>
      <p className="text">{title}</p>
    </button>
  );
};

export default BtnAddToCart;
