import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

//Google API Key
const apiKey = '';

const translateApi = createApi({
    reducerPath: 'translate',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://translation.googleapis.com/language/translate',
    }),
    endpoints(builder) {
        return {
            fetchLanguages: builder.query({
                query: () => {
                    return {
                        method: 'GET',
                        url: '/v2/languages',
                        params: {
                            key: apiKey,
                            target: 'tr',
                        },
                    };
                },
            }),
            translateText: builder.query({
                query: (data) => {
                    return {
                        method: 'POST',
                        url: '/v2',
                        params: {
                            key: apiKey,
                        },
                        body: {
                            format: 'text',
                            q: data.text,
                            source: data.source.language,
                            target: data.target.language,
                        },
                    };
                },
            }),
        };
    },
});

export const { useFetchLanguagesQuery, useLazyTranslateTextQuery } = translateApi;
export { translateApi };
