import { createSlice } from "@reduxjs/toolkit";

export const FavouriteSlice = createSlice({
    name: "search",
    initialState: "",
    reducers: {
        //Dentro de action.payload estan los datos
        searchByDescription: (state, action) => {

        },
        orderByProperty: (state, action) => {

        },
        filterByTag: (state, action) => {

        },
        expandTags: (state, action) => {

        },
        reduceTags: (state, action) => {

        },
        removeFromFavourites: (state, action) => {
            //Recordar que tiene que quitar datos de localStorage
        },
        downloadImage: (state, action) => {

        },
        editDescription: (state, action) => {

        }
    }
})

export const {searchByDescription, orderByProperty, filterByTag, expandTags, reduceTags, removeFromFavourites, downloadImage, editDescription} = FavouriteSlice.reducer;