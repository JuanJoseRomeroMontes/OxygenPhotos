import { configureStore } from "@reduxjs/toolkit";
import { FavouriteSlice } from "../features/FavouritesSlice";
import { SearchSlice } from "../features/SearchSlice/SearchSlice";


export const store = configureStore({
    reducer: {
        "searchSlice": SearchSlice.reducer,
        "favouriteSlice": FavouriteSlice.reducer
    }
})
