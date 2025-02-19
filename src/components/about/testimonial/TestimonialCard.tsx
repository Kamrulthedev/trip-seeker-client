import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";

import { ITestimonial } from "../../../types";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";

const TestimonialCard = ({ item }: { item: ITestimonial }) => {
  const { rating, description, name, occupation, profile_image } = item;

  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {Array(fullStars)
          .fill(0)
          .map((_, index) => (
            <FaStar key={`full-${index}`} />
          ))}
        {halfStar && <FaRegStarHalfStroke />}
        {Array(emptyStars)
          .fill(0)
          .map((_, index) => (
            <FaRegStar key={`empty-${index}`} />
          ))}
      </>
    );
  };

  return (
    <div className="border border-gray-300 rounded-sm p-5 space-y-4">
      <span className="flex gap-2 text-primary">{renderStars()}</span>
      <p className="text-sm text-gray-500">{description}</p>
      <div className="flex gap-3">
        <Avatar>
          <AvatarImage src={profile_image} alt={name} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <p>{name}</p>
          <p className="text-sm text-gray-500">{occupation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
