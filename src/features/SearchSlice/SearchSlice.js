import { createSlice } from "@reduxjs/toolkit";
import { FetchRandomThunk, FetchSearchThunk } from "./searchThunk";

export const SearchSlice = createSlice({
    name: "search",
    initialState: {
        status: 'idle',
        data: [ ],
        error: null,
    },
    reducers: {
        toggleFavPhoto: (state, action) => {
            let storage = JSON.parse(localStorage.getItem("favPhotosArray") || "[]")

            if(!storage.some(image => image.id === action.payload.id))
            {
                storage.push({
                    id: action.payload.id,
                    imageUrl: action.payload.urls.small,
                    downloadUrl: action.payload.urls.full,
                    description: action.payload.description == null ? "" : action.payload.description,
                    width: action.payload.width,
                    height: action.payload.height,
                    likes: action.payload.likes,
                    date: new Date(),
                });
    
                localStorage.setItem("favPhotosArray", JSON.stringify(storage))
            }
            else
            {
                storage = storage.filter(image => image.id !== action.payload.id);

                localStorage.setItem("favPhotosArray", JSON.stringify(storage))
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(FetchSearchThunk.pending, (state, action) => {
            state.status = 'pending'
        })
        .addCase(FetchSearchThunk.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.data = action.payload
        })
        .addCase(FetchSearchThunk.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.error
        })
        .addCase(FetchRandomThunk.pending, (state, action) => {
            state.status = 'pending'
        })
        .addCase(FetchRandomThunk.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.data = action.payload
        })
        .addCase(FetchRandomThunk.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.error
        })
    }
})

export const { toggleFavPhoto } = SearchSlice.actions;