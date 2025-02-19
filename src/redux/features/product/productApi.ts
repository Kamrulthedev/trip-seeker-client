import { Product } from "../../../components/manageProduct/ProductTable";
import baseApiSlice from "../../baseApi/baseApiSlice";

const productApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Query to get a list of products with optional filters
    getProducts: builder.query({
      query: (query) => {
        const params = new URLSearchParams();

        if (query.category)
          params.append("category", query.category.toString());
        if (query.price) params.append("price", query.price.toString());
        if (query.brand) params.append("brand", query.brand.toString());
        if (query.sort) params.append("sort", query.sort.toString());
        if (query.search) params.append("searchTerm", query.search.toString());

        return {
          url: `products?${params.toString()}`,
          method: "GET",
        };
      },
      providesTags: (result) =>
        result
          ? [{ type: "Products", id: "LIST" }]
          : [{ type: "Products", id: "LIST" }],
    }),

    // Mutation to add a new product
    addProduct: builder.mutation({
      query: (data) => ({
        url: "products",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "Products", id: "LIST" }], // Invalidate product list cache on mutation
    }),

    // Query to get a single product by ID
    getProduct: builder.query<Product, string>({
      query: (id) => ({
        url: `products/${id}`,
        method: "GET",
      }),
      providesTags: (_result, _error, id) => [{ type: "Products", id }], // Provide specific cache tags for product details
    }),

    // Mutation to update a product
    updateProduct: builder.mutation({
      query: (data) => ({
        url: `products/${data.id}`,
        method: "PATCH",
        body: data.data,
      }),
      invalidatesTags: [{ type: "Products", id: "LIST" }], // Invalidate product list cache on mutation
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Products", id: "LIST" }], // Invalidate product list cache on mutation
    }),
  }),
});

export const {
  useAddProductMutation, // Hook for adding a product mutation
  useGetProductsQuery, // Hook for fetching products with query parameters
  useGetProductQuery, // Hook for fetching a single product by ID
  useUpdateProductMutation, // Hook for updating a product
  useDeleteProductMutation, // Hook for deleting a product
} = productApiSlice;
