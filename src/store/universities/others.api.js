import { rootApi } from "../rootApi";

const othersApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getOthers: builder.query({
      query: () => ({
        url: "/api/others",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetOthersQuery } = othersApi;
