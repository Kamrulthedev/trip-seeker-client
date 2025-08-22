import banner from "../assets/images/banner/breadcrumb.jpg";
import PageCover from "../components/pageCover/PageCover";
import SectionHead from "../utils/SectionHead";
const ManageProduct = () => {
  return (
    <div>
      <PageCover title="Manage Product" image={banner} />
      <div className="md:px-[8%] px-5 py-10 bg-gray-100">
        <SectionHead title="Manage Product" />
      </div>
    </div>
  );
};

export default ManageProduct;
