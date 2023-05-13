import { createApi, fetchBaseQuery, } from'@reduxjs/toolkit/query/react'
import { queryHelper } from '../../lib/queryHelper'


export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    headers: {
      'X-Api-Key': import.meta.env.VITE_API_KEY
    }
  }),  
  endpoints: (builder) => ({
    getAllNews: builder.query({
      query: (params) => {
        return queryHelper(params, 'everything')
        // return queryData
      }
    }),

    getTopHeadLines: builder.query({
      
      query: (params) => {
        return queryHelper(params, 'top-headlines')
      }
    })


  }),

})

export const { useGetAllNewsQuery, useGetTopHeadLinesQuery } = newsApi

