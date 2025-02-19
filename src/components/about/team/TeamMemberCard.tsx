import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ITeamMember } from "../../../types";

const TeamMemberCard = ({ item }: { item: ITeamMember }) => {
  const { image, name, designation } = item;
  return (
    <div className="">
      <div className="relative group overflow-hidden">
        <img src={image} alt={name} className="w-full h-full" />
        <div className="absolute top-0 left-0 w-full h-full bg-slate-950/40 transition-transform ease-in-out duration-300 transform scale-0 group-hover:scale-100 origin-center flex justify-center items-center">
          <div className="flex gap-2">
            <button className="bg-white rounded-full p-2 hover:bg-primary hover:text-white  text-xl transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-500 delay-300">
              <FaFacebookF />
            </button>
            <button className="bg-white rounded-full p-2 hover:bg-primary hover:text-white  text-xl transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-500 delay-400">
              <FaTwitter />
            </button>
            <button className="bg-white rounded-full p-2 hover:bg-primary hover:text-white  text-xl transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-500 delay-500">
              <FaInstagram />
            </button>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-700 mt-6">
        <Link to="" className="text-lg">
          {name}
        </Link>
        <p className="text-primary">{designation}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
