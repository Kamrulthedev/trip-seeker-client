/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";
import ProductCard from "../components/card/ProductCard";
import PageCover from "../components/pageCover/PageCover";
import FilterByBrand from "../components/products/filter/FilterByBrand";
import FilterByCategories from "../components/products/filter/FilterByCategories";
import FilterByPrice from "../components/products/filter/FilterByPrice";
import FilterBySearch from "../components/products/filter/FilterBySearch";
import SortProduct from "../components/products/filter/SortProduct";
import ResponsiveFilter from "../components/products/responsiveFilter/ResponsiveFilter";
import { Button } from "../components/ui/button";
import { ProductCardLoader } from "../components/ui/loader/ProductCardLoader";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";
import { resetFilter } from "../redux/features/filterProducts/filterSlice";
import { useGetProductsQuery } from "../redux/features/product/productApi";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { IProduct } from "../types/product.type";

const Products = () => {
  const [showResponsiveFilter, setShowResponsiveFilter] = useState(false);
  const dispatch = useAppDispatch();
  const filterBy = useAppSelector((state) => state.filter);
  const { brand, category, price, search, sort } = filterBy;

  const { data, isLoading, isError, error } = useGetProductsQuery(filterBy);

  let content = null;

  if (isLoading) {
    content = Array.from({ length: 8 }).map((_, index) => (
      <ProductCardLoader key={index} />
    ));
  } else if (!isLoading && isError) {
    content = (
      <h1 className="col-span-4 text-3xl font-bold text-gray-900">
        {(error as any)?.data?.message}
      </h1>
    );
  } else if (!isLoading && !error && data?.data?.length === 0) {
    content = (
      <h1 className="col-span-4 text-lg text-center  py-5 h-fit rounded-md  text-rose-600">
        No Products Found!
      </h1>
    );
  } else {
    content = data?.data?.map((product: IProduct) => (
      <ProductCard key={product._id} productDetails={product} />
    ));
  }

  return (
    <div>
      <PageCover title="Products" />
      <div className="container mx-auto  md:py-16 py-8 md:grid grid-cols-12 gap-6">
        <div className="col-span-3 space-y-7 md:block hidden">
          {(brand || category || price || search || sort) && (
            <Button
              className="-mb-10"
              size="sm"
              variant="outline"
              onClick={() => dispatch(resetFilter())}
            >
              <GrPowerReset className="mr-1" /> Reset Filter
            </Button>
          )}
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
              {(brand || category || price || search || sort) && (
                <Button
                  size="default"
                  className="rounded-md"
                  variant="outline"
                  onClick={() => dispatch(resetFilter())}
                >
                  <GrPowerReset className="mr-1" /> Reset Filter
                </Button>
              )}
              <SortProduct />
            </div>
          </div>

          <ResponsiveFilter show={showResponsiveFilter} />

          <div className="grid md:grid-cols-4 gap-5 mt-10 gap-y-10 min-h-96">
            {content}
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

export default Products;
