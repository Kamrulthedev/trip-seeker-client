import baseApiSlice from "../../baseApi/baseApiSlice";

const orderApi = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => ({
        url: "/orders",
        method: "POST",
        body: data,
      }),
      invalidatesTags: (_result, _error, { products }) =>
        products.map(({ _id }: { _id: string }) => ({
          type: "Product",
          id: _id,
        })),
    }),
  }),
});

export const { useCreateOrderMutation } = orderApi;
export default orderApi;
