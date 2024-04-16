import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../common";

export const rootApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: base_url,
  }),
  endpoints: () => ({}),
});
