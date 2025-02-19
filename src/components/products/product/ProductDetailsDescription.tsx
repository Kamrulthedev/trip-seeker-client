import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";

const ProductDetailsDescription = () => {
  return (
    <section className="my-10">
      <div className="">
        <Tabs defaultValue="description" className="w-full">
          <div className="border-y border-gray-300 w-full flex justify-center items-center py-4">
            <TabsList className="grid w-fit grid-cols-3">
              <TabsTrigger value="description" className="uppercase">
                Description
              </TabsTrigger>
              <TabsTrigger value="additionalInformation" className="uppercase">
                Additional Information
              </TabsTrigger>
              <TabsTrigger value="review" className="uppercase">
                Review
              </TabsTrigger>
            </TabsList>
          </div>
          <div className="container mx-auto text-center text-xl">
            <TabsContent value="description">
              Description Coming Sooooooooooon!
            </TabsContent>
            <TabsContent value="additionalInformation">
              Additional Information Coming Sooooooooooon!
            </TabsContent>
            <TabsContent value="review">
              Review Coming Sooooooooooon!
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductDetailsDescription;
