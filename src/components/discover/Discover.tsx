import PageCover from "../pageCover/PageCover";
import bgBanner from '../../assets/images/discover/key-bg-1.jpg'
import Keyhighlight from "./Keyhighlight";
import Experiences from "./Experiences";
import Virtualtour from "./Virtualtour";
import Wheretostay from "./Wheretostay";
import TravelTips from "./TravelTips";
import { TripsAndPackage } from "../home/homeServices/TripsAndPackage";
import Agensys from "../home/agensys/Agensys";

const Discover = () => {
    return (
        <div className="bg-slate-50">
            <style>{`
                @import "https://cdn.jsdelivr.net/npm/swiper@11/swiper.min.css";
                @import "https://cdn.jsdelivr.net/npm/swiper@11/modules/pagination.min.css";
                @import "https://cdn.jsdelivr.net/npm/swiper@11/modules/navigation.min.css";

                /* Custom Swiper Styles for better look */
                .swiper-button-next, .swiper-button-prev {
                    color: #ffffff;
                    background-color: rgba(0, 0, 0, 0.3);
                    border-radius: 50%;
                    width: 44px;
                    height: 44px;
                }
                .swiper-button-next:after, .swiper-button-prev:after {
                    font-size: 20px;
                }
                .swiper-pagination-bullet-active {
                    background-color: #22c55e;
                }
            `}</style>
            <PageCover image={bgBanner} title="স্থান আবিষ্কার করুন" />
            <Keyhighlight />
            <Virtualtour />
            <Experiences />
            <TripsAndPackage></TripsAndPackage>
            <Wheretostay />
            <TravelTips />
              <Agensys></Agensys>
        </div>
    );
};

export default Discover;