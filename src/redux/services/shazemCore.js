import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazemCoreApi = createApi({
  reducerPath: "shazemCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "d17491e321msh703cac67a0fdc65p107eb3jsna3bd4ecd4933"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/world" }),
    getSongDetails: builder.query({
      query: (songid) => `tracks/details?track_id=${songid}`,
    }),
    getSongRelated: builder.query({
      query: (songid) => `tracks/related?track_id=${songid}`,
    }),
    getArtistDetails: builder.query({
      query: (artistId) => `artists/details?artist_id=${artistId}`,
    }),
    getSongByCountry: builder.query({
      query: (country) => `/charts/country?country_code=${country}`,
    }),
    getSongByGenre: builder.query({
      query: (genre) => `/charts/genre-world?genre_code=${genre}`,
    }),
    getSongBySearch: builder.query({
      query: (searchTerm) =>
        `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetSongByCountryQuery,
  useGetSongByGenreQuery,
  useGetSongBySearchQuery,
} = shazemCoreApi;
