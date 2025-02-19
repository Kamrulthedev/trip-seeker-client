import { GoLocation } from "react-icons/go";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { MdOutlineWatchLater } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import ContactCard from "./ContactCard";
const Contact = () => {
  return (
    <div className="container mx-auto md:grid grid-cols-2 gap-x-12 my-10 md:my-16">
      <aside>
        <div className="relative flex flex-col justify-start items-start mb-5">
          <h1
            className={`text-right text-black font-semibold text-2xl capitalize tracking-wide`}
          >
            Contact Us
          </h1>
          <div className="w-24 h-0.5 bg-primary"></div>
        </div>
        <p className="text-gray-900 text-justify">
          If you would like to know more about our policies, you can consult our
          Terms and Conditions. You will also be able to follow your order
          (tracking number will be provided in an e-mail after ordering). You
          wish to return some items?{" "}
          <Link to={"#"} className="text-primary">
            Click here.
          </Link>
        </p>
        <div className="space-y-4 mt-5">
          <ContactCard
            icon={GoLocation}
            title={"Address"}
            description={"123, Main Street, City, Country"}
          />
          <ContactCard
            icon={HiOutlinePhone}
            title={"Phone"}
            description={"123-456-7890"}
          />
          <ContactCard
            icon={HiOutlineEnvelope}
            title={"Email"}
            description={"VlNpX@example.com"}
          />
          <ContactCard
            icon={MdOutlineWatchLater}
            title={"Open Hours"}
            description={"Mon - Fri: 9am - 6pm"}
          />
        </div>
      </aside>
      <aside className="mt-5 md:mt-0">
        <div className="relative flex flex-col justify-start items-start mb-5">
          <h1
            className={`text-right text-black font-semibold text-2xl capitalize tracking-wide`}
          >
            Get in touch
          </h1>
          <div className="w-24 h-0.5 bg-primary"></div>
        </div>
        <form className="grid grid-cols-2 gap-5">
          <Input
            type="email"
            placeholder="Enter your email"
            className="col-span-2 h-14 rounded-sm"
            required
          />
          <Input
            type="text"
            placeholder="Your name"
            className="h-14 rounded-sm"
            required
          />
          <Input
            type="text"
            placeholder="Subject"
            className="h-14 rounded-sm"
            required
          />
          <Textarea
            placeholder="Message"
            className="h-32 rounded-sm col-span-2"
            required
          />
          <Button className="col-span-2 rounded-sm" size="lg">
            Send Message
          </Button>
        </form>
      </aside>
    </div>
  );
};

export default Contact;
