import { createSlice } from "@reduxjs/toolkit";
import Header from "../../components/Header/Header";

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

export const FavouritePage = () => {
    const favValues = {
        titleName: 'Fav Images',
        buttonText:'Fav',
        imageUrl:'./src/assets/photosPage.svg',
        imageAlt:'Photos page',
        linkTo:'/'
    }

    return(
        <Header values={favValues} />
    )
};