import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const currencyApi = createApi({
    reducerPath: 'currencyApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.exchangerate-api.com/v4/latest/' }),
    endpoints: (builder) => ({
        fetchRates: builder.query({
            query: (base: string) => `${base}`,
        }),
    }),
});

export const { useFetchRatesQuery } = currencyApi;
