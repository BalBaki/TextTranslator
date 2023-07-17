import { createSlice } from '@reduxjs/toolkit';

const targetLanguageSlice = createSlice({
    name: 'targetLanguage',
    initialState: {
        language: null,
        searchTerm: '',
    },
    reducers: {
        changeTargetLanguage: (state, action) => {
            state.language = action.payload;
        },
        changeTargetSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
    },
});

export const { changeTargetLanguage, changeTargetSearchTerm } = targetLanguageSlice.actions;
export { targetLanguageSlice };
