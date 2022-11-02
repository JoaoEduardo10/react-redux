import { configureStore } from "@reduxjs/toolkit";

import sliceLanguage from "./sliceLeguages"


export const store = configureStore({
    reducer:{
        language: sliceLanguage
    }
})