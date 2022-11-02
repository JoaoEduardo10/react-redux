import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Language = {
    name: string,
    favorite: boolean
};

const INITIAL_STATE: Language[] = [
    {name: "TypeScript", favorite: false},
    {name: "JavaScript", favorite: false},
    {name: "Java", favorite: false},
];

 const sliceLanguages = createSlice({
    name: 'languages',
    initialState: INITIAL_STATE,
    reducers: {
        addLanguages(state, { payload }: PayloadAction<string>){
            return [...state, {name: payload, favorite: false }]
        },
        toFavoret(state, { payload }: PayloadAction<string>){
            return state.map(iten => iten.name === payload ? { ...iten, favorite: !iten.favorite } : iten)
        }
    },
    
});


export default sliceLanguages.reducer
export const { addLanguages, toFavoret } = sliceLanguages.actions

export const useLanguage = (state: any) => {
    return state.language as Language[]
}