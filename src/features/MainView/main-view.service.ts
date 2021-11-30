import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Sound, SoundsResponse } from './main-view.types';

const apiUrl = 'http://localhost:3000/';

export const soundsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl
  }),
  reducerPath: 'soundsApi',
  endpoints: (build) => ({
    getSound: build.query<Sound, string>({
      query: (id) => `sounds/${id}`,
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        if(!id) return;
        // `onStart` side-effect
        // dispatch(messageCreated('Fetching post...'))
        try {
          const { data } = await queryFulfilled
          // `onSuccess` side-effect
        //   dispatch(messageCreated('Post received!'))
        } catch (err) {
          // `onError` side-effect
        //   dispatch(messageCreated('Error fetching post!'))
        }
      },
    }),
    getSounds: build.query<SoundsResponse, void>({
        query: () => 'sounds',
      }),
    updateSound: build.mutation<Sound, string>({
      query: (id) => ({
        url: `sounds/${id}/play`,
        method: 'PUT',
      }),
    }),
  }),
})
// export const { useGetSound, useGetSounds } = api;