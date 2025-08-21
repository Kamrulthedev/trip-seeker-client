import { useState } from "react";
// import { useGetProductsQuery } from "../../../redux/features/product/productApi";
import { IProduct } from "../../../types/product.type";
import SectionHead from "../../../utils/SectionHead";
import ProductCard from "../../card/ProductCard";
import { BtnSecondary } from "../../ui/BtnSecondary";
import { ProductCardLoader } from "../../ui/loader/ProductCardLoader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { Menu } from "lucide-react";




const ClothesAndEquipment = () => {
  const [category, setCategory] = useState("Couple_Escape");
  // const { data: products, isLoading } = useGetProductsQuery({ category });
  const isLoading = false;
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  // New array of travel package data
  const travelPackages = [
    {
      _id: "1",
      name: "Romantic Getaway: Maldives Honeymoon",
      category: "Couple_Escape",
      price: 1200,
      description: "Perfect for couples seeking a memorable escape. Enjoy pristine beaches and luxurious resorts.",
      imageUrl: "https://placehold.co/400x300/e0e0e0/000000?text=Couple+Escape",
      discount: '20%',
      rating: 4.8,
    },
    {
      _id: "2",
      name: "Family Fun Adventure: Thailand Explorer",
      category: "Family_Tour",
      price: 2500,
      description: "An unforgettable adventure for the whole family. Discover ancient temples and vibrant markets.",
      imageUrl: "https://placehold.co/400x300/d0d0d0/000000?text=Family+Tour",
      discount: '20%',
      rating: 4.7,
    },
    {
      _id: "3",
      name: "Friends' Thrill Seekers: European Backpacking",
      category: "Group_Adventure",
      price: 900,
      description: "Exciting group adventures for friends. Explore iconic cities and create lasting memories.",
      imageUrl: "https://placehold.co/400x300/c0c0c0/000000?text=Group+Adventure",
      discount: '20%',
      rating: 4.5,
    },
    {
      _id: "4",
      name: "Luxury Beach Retreat: Bora Bora Excursion",
      category: "Luxury_Trip",
      price: 3500,
      description: "Indulge in a luxurious and relaxing beach vacation. Crystal clear waters and overwater bungalows await.",
      imageUrl: "https://placehold.co/400x300/b0b0b0/000000?text=Luxury+Trip",
      discount: '20%',
      rating: 4.9,
    },
    {
      _id: "5",
      name: "Budget Backpacker's Dream: Vietnam Trek",
      category: "Budget_Travel",
      price: 500,
      description: "Explore the world on a budget. Experience local culture and stunning landscapes without breaking the bank.",
      imageUrl: "https://placehold.co/400x300/a0a0a0/000000?text=Budget+Travel",
      discount: '20%',
      rating: 4.2,
    },
    {
      _id: "6",
      name: "Couple's Serenity Spa Retreat",
      category: "Couple_Escape",
      price: 1500,
      description: "Rejuvenate with your loved one at a serene spa retreat.",
      imageUrl: "https://placehold.co/400x300/f0f0f0/000000?text=Spa+Retreat",
      discount: '20%',
      rating: 4.6,
    },
    {
      _id: "7",
      name: "Family Wildlife Safari: Kenya",
      category: "Family_Tour",
      price: 4000,
      description: "An thrilling safari adventure perfect for families to see wildlife.",
      imageUrl: "https://placehold.co/400x300/e5e5e5/000000?text=Safari+Tour",
      discount: '20%',
      rating: 4.9,
    },
    {
      _id: "8",
      name: "Friends' Mountain Trek: Nepal",
      category: "Group_Adventure",
      price: 1100,
      description: "Challenge yourselves with a thrilling mountain trek with friends.",
      imageUrl: "https://placehold.co/400x300/d5d5d5/000000?text=Mountain+Trek",
      discount: '20%',
      rating: 4.4,
    },
    {
      _id: "9",
      name: "Luxury Cruise: Caribbean Escape",
      category: "Luxury_Trip",
      price: 5000,
      description: "Experience the ultimate luxury on a Caribbean cruise.",
      imageUrl: "https://placehold.co/400x300/c5c5c5/000000?text=Luxury+Cruise",
      discount: '20%',
      rating: 5.0,
    },
    {
      _id: "10",
      name: "Budget City Break: Prague",
      category: "Budget_Travel",
      price: 300,
      description: "Explore a beautiful European city on a tight budget.",
      imageUrl: "https://placehold.co/400x300/b5b5b5/000000?text=City+Break",
      discount: '20%',
      rating: 4.1,
    },
  ];



  const categories = [
    { key: "Couple_Escape", label: "Couple Escape" },
    { key: "Family_Tour", label: "Family Tour" },
    { key: "Group_Adventure", label: "Group Adventure" },
    { key: "Luxury_Trip", label: "Luxury Trip" },
    { key: "Budget_Travel", label: "Budget Travel" },
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
