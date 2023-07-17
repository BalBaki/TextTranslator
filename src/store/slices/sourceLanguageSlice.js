import { createSlice } from '@reduxjs/toolkit';

const sourceLanguageSlice = createSlice({
    name: 'sourceLanguage',
    initialState: {
        language: null,
        text: '',
        searchTerm: '',
    },
    reducers: {
        changeSourceLanguage: (state, action) => {
            state.language = action.payload;
        },
        changeText: (state, action) => {
            state.text = action.payload;
        },
        changeSourceSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
    },
});

export const { changeSourceLanguage, changeText, changeSourceSearchTerm } = sourceLanguageSlice.actions;
export { sourceLanguageSlice };
