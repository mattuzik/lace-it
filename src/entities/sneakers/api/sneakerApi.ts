import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SneakerParams, SneakerArrivals } from '../model/types';
const apiUrl = import.meta.env.VITE_BASE_URL;
import { Sneaker } from '../model/types';

export const sneakerApi = createApi({
  reducerPath: 'sneakerApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: (builder) => ({
    getSneakers: builder.query<Sneaker[], { name?: string, gender?: string; isSale?: boolean; isNew?: boolean }>({
      query: (params) => {
        const queryParams = { ...params };

        if (queryParams.name) {
          queryParams.name = `*${queryParams.name}*`;
        }

        return {
          url: `/items`,
          params: queryParams, 
        }
      }
    }),

    getNewArrivals: builder.query<SneakerArrivals, SneakerParams>({
      query: () => '/items?isNew=true&limit=4',
    }),

    getSneakerById: builder.query<Sneaker, string>({
      query: (id) => `/items?id=${id}`,
      transformResponse: (response: Sneaker[]) => response[0]
    }),
  }),
});

export const { useGetSneakersQuery, useGetNewArrivalsQuery, useGetSneakerByIdQuery } = sneakerApi;
