/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import SectionHead from "../../../utils/SectionHead";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { BtnSecondary } from "../../ui/BtnSecondary";
import { ServiceCardLoader } from "../../ui/loader/ServiceCardLoader";
import HomeServices from "./HomeServices";

const TripsAndPackage = () => {
  const [category, setCategory] = useState("Fitness");
  const { data: products, isLoading } = useGetProductsQuery({ category });

  const renderProductCards = () => {
    if (isLoading) {
      return Array.from({ length: 8 }).map((_, index) => (
        <ServiceCardLoader key={index} />
      ));
    }

    return products?.data?.map((product: any) => (
      <HomeServices key={product._id} productDetails={product} />
    ));
  };


    return (
       <div className="container mx-auto px-5 my-20 ">
      <SectionHead title="clothes & equipment" />
      <Tabs defaultValue="Fitness">
        <TabsList className="md:grid md:w-1/2 w-full grid-cols-3 mx-auto mt-5 mb-10">
          <TabsTrigger onClick={() => setCategory("Fitness")} value="Fitness">
            FITNESS
          </TabsTrigger>
          <TabsTrigger
            onClick={() => setCategory("Mens_Clothing")}
            value="Mens_Clothing"
          >
            MEN'S CLOTHES
          </TabsTrigger>
          <TabsTrigger
            onClick={() => setCategory("Womans_Clothing")}
            value="Womans_Clothing"
          >
            WOMAN'S CLOTHES
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Fitness">
          <div className="grid md:grid-cols-4 gap-8">
            {renderProductCards()}
          </div>
        </TabsContent>
        <TabsContent value="Mens_Clothing">
          <div className="grid md:grid-cols-4 gap-8">
            {renderProductCards()}
          </div>
        </TabsContent>
        <TabsContent value="Womans_Clothing">
          <div className="grid md:grid-cols-4 gap-8">
            {renderProductCards()}
          </div>
        </TabsContent>
      </Tabs>
      <div className="flex justify-center items-center mt-5">
        <BtnSecondary />
      </div>
    </div>
    );
};

export default TripsAndPackage;