import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApiSlice = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gymdo-store-server.vercel.app/api/",
  }),
  tagTypes: ["Products"],
  endpoints: () => ({}),
});

export default baseApiSlice;
