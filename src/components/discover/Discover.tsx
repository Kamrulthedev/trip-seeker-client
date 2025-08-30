import PageCover from "../pageCover/PageCover";
import bgBanner from '../../assets/images/banner/bg_page.jpg'
import Keyhighlight from "./Keyhighlight";
import Experiences from "./Experiences";
import Virtualtour from "./Virtualtour";
import Featuredtur from "./Featuredtur";
import Wheretostay from "./Wheretostay";

const Discover = () => {
    return (
        <div>
            <PageCover title="Discover Page" image={bgBanner}></PageCover>
            <h1>Discover Page</h1>
            <Keyhighlight></Keyhighlight>
            <Experiences></Experiences>
            <Virtualtour></Virtualtour>
            <Featuredtur></Featuredtur>
            <Wheretostay></Wheretostay>
        </div>
    );
};

export default Discover;