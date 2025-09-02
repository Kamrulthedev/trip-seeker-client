import { HiOutlinePlus } from "react-icons/hi2";
import "./style/BtnAddItemStyle.css";
const BtnAddItem = () => {
  return (
    <button type="button" className="buttonAdd">
      <span className="buttonAdd__text">Add Product</span>
      <span className="buttonAdd__icon">
        <HiOutlinePlus className="text-white text-xl" />
      </span>
    </button>
  );
};

export default BtnAddItem;
