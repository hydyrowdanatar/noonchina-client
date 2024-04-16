import { rootApi } from "../rootApi";

const pekinApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getPekin: builder.query({
      query: () => ({
        url: "/api/pekins?populate=image",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPekinQuery } = pekinApi;
