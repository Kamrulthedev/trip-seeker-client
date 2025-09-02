import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";



const Logo = () => {
    return (
        <div>
            <Link className="cursor-pointer flex items-center lg:p-2 p-4 gap-2 lg:-ml-10 rounded-2xl
                   transition-all duration-300 ease-in-out hover:scale-105"
                onClick={() => {
                    console.log("Navigating to home page...");
                }}
                aria-label="Go to Trip Seeker home"
                to={"/"}>
                <img
                    src={logo}
                    alt="Trip Seeker Logo"
                    className="lg:w-12 lg:h-12 md:w-12 md:h-12 w-8 h-8 rounded-full object-cover ring-1 border-bg-gradient-to-r from-blue-500 to-green-500 ring-offset-1 shadow-md
                     transition-transform duration-300 ease-in-out hover:rotate-12"
                />
                <h1 className="lg:text-4xl md:text-3xl sm:text-xl text-lg font-bold tracking-wider
                       text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500
                       drop-shadow-lg uppercase
                       transition-colors duration-300">
                    TRIP SEEKER
                </h1>
            </Link>
        </div>
    );
};

export default Logo;