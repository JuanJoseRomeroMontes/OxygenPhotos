import { createSlice } from "@reduxjs/toolkit";
import Header from "../../components/Header/Header";

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

export const SearchPage = () => {
    const homeValues = {
        titleName: 'All Images',
        buttonText:'All',
        imageUrl:'./src/assets/favPage.svg',
        imageAlt:'Fav page',
        linkTo:'/favourites'
    }

    return(
        <Header values={homeValues} />
    )
};