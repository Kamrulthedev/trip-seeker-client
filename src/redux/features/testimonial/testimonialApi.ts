import baseApiSlice from "../../baseApi/baseApiSlice";

const testimonialApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTestimonials: builder.query({
      query: () => ({
        url: "testimonials",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetTestimonialsQuery } = testimonialApiSlice;
