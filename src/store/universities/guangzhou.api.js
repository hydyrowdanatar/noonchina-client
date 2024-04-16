import { rootApi } from "../rootApi";

const guangzhouApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getGuangzhou: builder.query({
      query: () => ({
        url: "/api/guangzhous?populate=image",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetGuangzhouQuery } = guangzhouApi;
