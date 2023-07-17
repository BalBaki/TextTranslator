import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { translateApi } from './apis/translateApi';
import { sourceLanguageSlice } from './slices/sourceLanguageSlice';
import { targetLanguageSlice } from './slices/targetLanguageSlice';

const store = configureStore({
    reducer: {
        [translateApi.reducerPath]: translateApi.reducer,
        source: sourceLanguageSlice.reducer,
        target: targetLanguageSlice.reducer,
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat(translateApi.middleware);
    },
});

setupListeners(store.dispatch);

export { store };
export { useFetchLanguagesQuery, useLazyTranslateTextQuery } from './apis/translateApi';
export { changeTargetLanguage, changeTargetSearchTerm } from './slices/targetLanguageSlice';
export { changeSourceLanguage, changeSourceSearchTerm, changeText } from './slices/sourceLanguageSlice';
