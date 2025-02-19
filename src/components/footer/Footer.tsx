import {
  FaDribbble,
  FaFacebook,
  FaFacebookMessenger,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import payCopyright from "../../assets/images/pay_copyright.png";
const Footer = () => {
  return (
    <footer className="bg-[#f5f5f5]">
      <div className="grid md:grid-cols-4  container mx-auto py-10 space-y-5 md:space-y-0 justify-center">
        <div className="space-y-4">
          <Link to="">
            <img src={logo} alt="" className="w-36" />
          </Link>
          <p>Sophisticated simplicity for the independent mind.</p>
          <div className="flex space-x-4 text-lg transition-all">
            <Link to="" className="hover:text-primary">
              <FaTwitter />
            </Link>
            <Link to="" className="hover:text-primary">
              <FaFacebook />
            </Link>
            <Link to="" className="hover:text-primary">
              <FaDribbble />
            </Link>
            <Link to="" className="hover:text-primary">
              <FaInstagram />
            </Link>
            <Link to="" className="hover:text-primary">
              <FaFacebookMessenger />
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold">Help & Information</h3>
          <div className="w-16 h-0.5 bg-black mt-2"></div>
          <div className="space-y-2 flex flex-col mt-6 transition-all text-sm">
            <Link to="" className="hover:text-primary">
              Harman Corporate
            </Link>
            <Link to="" className="hover:text-primary">
              Careers
            </Link>
            <Link to="" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="" className="hover:text-primary">
              Terms of Use
            </Link>
            <Link to="" className="hover:text-primary">
              Why Buy Direct
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold">Quick Shop</h3>
          <div className="w-16 h-0.5 bg-black mt-2"></div>
          <div className="space-y-2 flex flex-col mt-6 transition-all text-sm">
            <Link to="" className="hover:text-primary">
              Sitemap
            </Link>
            <Link to="" className="hover:text-primary">
              Contact Us
            </Link>
            <Link to="" className="hover:text-primary">
              Support Center
            </Link>
            <Link to="" className="hover:text-primary">
              Delivery & Returns
            </Link>
            <Link to="" className="hover:text-primary">
              Investors Site
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold">Categories</h3>
          <div className="w-16 h-0.5 bg-black mt-2"></div>
          <div className="space-y-2 flex flex-col mt-6 transition-all text-sm">
            <Link to="" className="hover:text-primary">
              Clothing Gym
            </Link>
            <Link to="" className="hover:text-primary">
              Fitness Equipment
            </Link>
            <Link to="" className="hover:text-primary">
              LifeStyle
            </Link>
            <Link to="" className="hover:text-primary">
              Gym Sport
            </Link>
            <Link to="" className="hover:text-primary">
              Supplements
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto py-5 flex md:flex-row flex-col-reverse  justify-between items-center">
          <p className="text-xs text-gray-700 mt-2 md:mt-0">
            &copy; Copyright 2022. All Rights Reserved. | GymdoStore by
            Mahamudul Hasan
          </p>
          <img src={payCopyright} alt="payment Copyright" className="w-52" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
