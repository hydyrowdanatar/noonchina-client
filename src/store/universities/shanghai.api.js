import { rootApi } from "../rootApi";

const shanghaiApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getShanghai: builder.query({
      query: () => ({
        url: "/api/shanghais?populate=image",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetShanghaiQuery } = shanghaiApi;
