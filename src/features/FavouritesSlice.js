import { createSlice } from "@reduxjs/toolkit";

export const FavouriteSlice = createSlice({
    name: "search",
    initialState: { dataFav: [] },
    reducers: {
        //Dentro de action.payload estan los datos
        addFavorite: (state, action) => {
            state.dataFav.push(action.payload);
        },
        removeFavorite: (state, action) => {

        }
    }
})
