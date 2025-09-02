/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";
import PageCover from "../components/pageCover/PageCover";
import FilterByBrand from "../components/products/filter/FilterByBrand";
import FilterByCategories from "../components/products/filter/FilterByCategories";
import FilterByPrice from "../components/products/filter/FilterByPrice";
import FilterBySearch from "../components/products/filter/FilterBySearch";
import SortProduct from "../components/products/filter/SortProduct";
import { Button } from "../components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";




const Services = () => {
  const [showResponsiveFilter, setShowResponsiveFilter] = useState(false);

  return (
    <div>
      <PageCover title="Products" />
      <div className="container mx-auto  md:py-16 py-8 md:grid grid-cols-12 gap-6">
        <div className="col-span-3 space-y-7 md:block hidden">

          <Button
            className="-mb-10"
            size="sm"
            variant="outline"

          >
            <GrPowerReset className="mr-1" /> Reset Filter
          </Button>

          <FilterByCategories />
          <FilterByPrice />
          <FilterByBrand />
        </div>

        <div className="md:col-span-9">
          <div className="flex md:flex-row flex-col items-center justify-between">
            <FilterBySearch />
            <div className="w-full md:w-fit flex  items-center justify-between gap-2 mt-4 md:mt-0">
              <Button
                onClick={() => setShowResponsiveFilter(!showResponsiveFilter)}
                size={"default"}
                className=" rounded-md px-10 bg-primary text-white"
                variant="outline"
              >
                <CiFilter className="mr-1 text-xl " /> Filter
              </Button>

              <Button
                size="default"
                className="rounded-md"
                variant="outline"
              >
                <GrPowerReset className="mr-1" /> Reset Filter
              </Button>

              <SortProduct />
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-5 mt-10 gap-y-10 min-h-96">
          </div>

          <Pagination className="mt-10 bottom-0">
            <PaginationContent className="space-x-4">
              <PaginationItem>
                <PaginationPrevious size="lg" href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink size="sm" href="#">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink size="sm" href="#">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext size="lg" href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default Services;