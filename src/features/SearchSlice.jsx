import { createSlice } from "@reduxjs/toolkit";

export const SearchSlice = createSlice({
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
        addToFavourites: (state, action) => {
            //Recordar que tiene que guardar datos en localStorage
        },
        downloadImage: (state, action) => {

        },
        editDescription: (state, action) => {

        }
    }
})

export const {searchByDescription, orderByProperty, filterByTag, expandTags, reduceTags, addToFavourites, downloadImage, editDescription} = SearchSlice.reducer;