import { Link } from "react-router-dom";
import bgBanner from "../../assets/images//banner/bg_page.jpg";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
const PageCover = ({
  image = bgBanner,
  title,
}: {
  title: string;
  image?: string;
}) => {
  return (
    <div className="w-screen relative">
      <img src={image} alt="" className="w-full h-80" />
      <div className="absolute bg-slate-900/30 inset-0 flex flex-col justify-center items-center ">
        <div className="relative flex flex-col justify-center items-center mb-10">
          <h1
            className={`text-center text-white font-semibold text-4xl capitalize tracking-wide`}
          >
            {title}
          </h1>
          <div className="w-24 h-0.5 bg-primary"></div>
        </div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="text-slate-50">
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white" />
            <BreadcrumbItem>
              <BreadcrumbPage>{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default PageCover;
