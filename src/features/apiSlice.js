import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  // Reducer Path it's name shown on Redux Tab
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_URL
  }),
  // With tag type we can invalidate cache
  tagTypes: ["databases"],
  endpoints: (builder) => ({
    getDatabases: builder.query({
      query: () => "/databases",
      providesTags: ["databases"]
    })
  })
});
/**
 * Names export are endpoints: use{endpoint}Query
 */
export const { useGetDatabasesQuery } = apiSlice;