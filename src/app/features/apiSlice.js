import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import extraValues from "../lib/constants";
import { getHeaders } from "../lib/utilityStore";

/**
 * Base function to call backend
 */
const baseQuery = fetchBaseQuery({
  baseUrl: extraValues.get("BACKEND_URL"),
  prepareHeaders: (headers) => getHeaders(headers)
});

export const apiSlice = createApi({
  // ReducerPath is name shown on Redux Tab
  reducerPath: extraValues.get("REDUX_REDUCER_PATH"),
  // BaseQUery: prepare the call with headers and so on
  baseQuery,
  tagTypes: [
    extraValues.get("REDUX_TAG_VERSIONS"),
    extraValues.get("REDUX_TAG_PROGRAMMING_LANGUAGES"),
    extraValues.get("REDUX_TAG_FRAMEWORKS"),
    extraValues.get("REDUX_TAG_TOOLS"),
    extraValues.get("REDUX_TAG_DATABASES"),
    extraValues.get("REDUX_TAG_WORKING_MODES"),
  ],
  endpoints: (builder) => ({
    getVersions: builder.query({
      query: () => `/${extraValues.get("URL_VERSIONS")}`,
      providesTags: [extraValues.get("REDUX_TAG_VERSIONS")]
    }),
    getProgrammingLanguages: builder.query({
      query: () => `/${extraValues.get("URL_PROGRAMMING_LANGUAGES")}`,
      providesTags: [extraValues.get("REDUX_TAG_PROGRAMMING_LANGUAGES")]
    }),
    getFrameworks: builder.query({
      query: () => `/${extraValues.get("URL_FRAMEWORKS")}`,
      providesTags: [extraValues.get("REDUX_TAG_FRAMEWORKS")]
    }),
    getTools: builder.query({
      query: () => `/${extraValues.get("URL_TOOLS")}`,
      providesTags: [extraValues.get("REDUX_TAG_TOOLS")]
    }),
    getDatabases: builder.query({
      query: () => `/${extraValues.get("URL_DATABASES")}`,
      providesTags: [extraValues.get("REDUX_TAG_DATABASES")]
    }),
    getWorkingModes: builder.query({
      query: () => `/${extraValues.get("URL_WORKING_MODES")}`,
      providesTags: [extraValues.get("REDUX_TAG_WORKING_MODES")]
    })
  })
});

export const {
  useGetVersionsQuery,
  useGetProgrammingLanguagesQuery,
  useGetFrameworksQuery,
  useGetToolsQuery,
  useGetDatabasesQuery,
  useGetWorkingModesQuery
} = apiSlice;
