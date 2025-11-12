import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../../utils/constant";
// import { base_url } from "../../utils/utils";

export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  endpoints: (builder) => ({
    fetchData: builder.mutation({
      query: ({ action, path, formDataArr }) => {
        const formData = new FormData();
        Object.keys(formDataArr).forEach((key,index) => {
          formData.append(key, formDataArr[key]);
        });
        return {
          url: path,
          method: "POST",
          body: formData,
        };
      },
      transformResponse: (response) => ({
        data: response.data || [],
        totalCount: response.totalcount || 0,
        count: response.count || 0,
        success: response.success || false,
        message: response.message,
      }),
    }),
  }),
});

export const { useFetchDataMutation } = dataApi;
