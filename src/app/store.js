import { configureStore } from "@reduxjs/toolkit";
import { FavouriteSlice } from "../features/favouritesSlice/FavouritesSlice";
import { SearchSlice } from "../features/searchSlice/SearchSlice";


export const store = configureStore({
    reducer: {
        "searchSlice": SearchSlice.reducer,
        "favouriteSlice": FavouriteSlice.reducer
    }
})
