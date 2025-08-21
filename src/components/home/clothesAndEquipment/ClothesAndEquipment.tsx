import { useState } from "react";
import { useGetProductsQuery } from "../../../redux/features/product/productApi";
import { IProduct } from "../../../types/product.type";
import SectionHead from "../../../utils/SectionHead";
import ProductCard from "../../card/ProductCard";
import { BtnSecondary } from "../../ui/BtnSecondary";
import { ProductCardLoader } from "../../ui/loader/ProductCardLoader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { Menu } from "lucide-react";

const ClothesAndEquipment = () => {
  const [category, setCategory] = useState("Fitness");
  const { data: products, isLoading } = useGetProductsQuery({ category });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    { key: "Fitness", label: "Couple Escape" },
    { key: "Mens_Clothing", label: "Family Tour" },
    { key: "Group_Adventure", label: "Group Adventure" },
    { key: "Luxury_Trip", label: "Luxury Trip" },
    { key: "Womans_Clothing", label: "Budget Travel" },
  ];

  const renderProductCards = () => {
    if (isLoading) {
      return Array.from({ length: 8 }).map((_, index) => (
        <ProductCardLoader key={index} />
      ));
    }

    return products?.data?.map((product: IProduct) => (
      <ProductCard key={product._id} productDetails={product} />
    ));
  };

  return (
    <div className="container mx-auto px-5 my-20">
      <SectionHead title="🏝️ Trip Packages Tailored Just for You" />

      <Tabs defaultValue="Fitness">
        {/* For large devices */}
        <TabsList className="hidden md:grid md:w-1/2 w-full grid-cols-5 mx-auto mt-5 mb-10">
          {categories.map((cat) => (
            <TabsTrigger
              key={cat.key}
              onClick={() => setCategory(cat.key)}
              value={cat.key}
            >
              {cat.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* For small devices - Three dots dropdown */}
        <div className="md:hidden flex justify-center mt-5 mb-10 relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 border rounded-lg shadow-sm flex items-center gap-2"
          >
            <Menu className="w-5 h-5" /> Categories
          </button>
          {isMenuOpen && (
            <div className="absolute top-12 z-10 bg-white shadow-lg border rounded-lg w-48">
              {categories.map((cat) => (
                <div
                  key={cat.key}
                  onClick={() => {
                    setCategory(cat.key);
                    setIsMenuOpen(false);
                  }}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  {cat.label}
                </div>
              ))}
            </div>
          )}
        </div>

        {categories.map((cat) => (
          <TabsContent key={cat.key} value={cat.key}>
            <div className="grid md:grid-cols-4 gap-8">{renderProductCards()}</div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="flex justify-center items-center mt-5">
        <BtnSecondary />
      </div>
    </div>
  );
};

export default ClothesAndEquipment;
