import baseApiSlice from "../../baseApi/baseApiSlice";

const teamMemberApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTeamMembers: builder.query({
      query: () => ({
        url: "teams",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetTeamMembersQuery } = teamMemberApiSlice;

export default teamMemberApiSlice;
