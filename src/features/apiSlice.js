import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  // Reducer Path it's name shown on Redux Tab
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_URL
  }),
  // With tag type we can invalidate cache
  tagTypes: ["databases", "frameworks", "programmingLanguages", "tools", "workingMode"],
  endpoints: (builder) => ({
    getDatabases: builder.query({
      query: () => "/databases",
      providesTags: ["databases"]
    }),
    getFrameworks: builder.query({
      query: () => "/frameworks",
      providesTags: ["frameworks"]
    }),
    getProgrammingLanguages: builder.query({
      query: () => "/programming-languages",
      providesTags: ["programmingLanguages"]
    }),
    getTools: builder.query({
      query: () => "/tools",
      providesTags: ["tools"]
    }),
    getWorkingMode: builder.query({
      query: () => "/working-mode",
      providesTags: ["workingMode"]
    })
  })
});
/**
 * Names export are endpoints: use{endpoint}Query
 */
export const {
  useGetDatabasesQuery,
  useGetFrameworksQuery,
  useGetProgrammingLanguagesQuery,
  useGetToolsQuery,
  useGetWorkingModeQuery
} = apiSlice;
