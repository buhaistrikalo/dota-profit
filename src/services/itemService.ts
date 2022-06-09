import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IItem } from '../models/IItem';

let headers = new Headers();

headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Origin', process.env.REACT_APP_API_URL || '');

export const itemAPI = createApi({
    reducerPath: 'itemAPI',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
    tagTypes: ['Item'],
    endpoints: (build) => ({
        fetchAllItems: build.query<IItem[], any>({
            query: () => ({
                url: '/items?format=json',
                headers: headers,
                method: 'GET',
            }),
            providesTags: (result) => ['Item'],
        }),
        // createItem: build.mutation<IItem, IItem>({
        //     query: (item) => ({
        //         url: '/items',
        //         method: 'POST',
        //         body: item,
        //     }),
        //     invalidatesTags: ['Item'],
        // }),
        // updateItem: build.mutation<IItem, IItem>({
        //     query: (item) => ({
        //         url: `/items/${item.id}`,
        //         method: 'PUT',
        //         body: item,
        //     }),
        //     invalidatesTags: ['Item'],
        // }),
        // removeItem: build.mutation<IItem, IItem>({
        //     query: (item) => ({
        //         url: `/items/${item.id}`,
        //         method: 'DELETE',
        //         body: item,
        //     }),
        //     invalidatesTags: ['Item'],
        // }),
    }),
});
