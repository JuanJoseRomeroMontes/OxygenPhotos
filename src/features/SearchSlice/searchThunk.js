import { createAsyncThunk } from "@reduxjs/toolkit";

const id = '4RUVzEbQU_Izhy7q9OhvZ6wY4t612GDqkjTxTG2PqxY';

export const FetchSearchThunk = createAsyncThunk("search/fetchSearchThunk", async (searchData) => {
    try{
        const request = await fetch(`https://api.unsplash.com/search/photos?query=${searchData}&per_page=30&client_id=${id}`);

        if(request.ok){
            const data = await request.json();
            return data.results;
        }
    
        return null;
    }
    catch(error){
        return null;
    }
})

export const FetchRandomThunk = createAsyncThunk("search/fetchRandomThunk", async () => {
    try{
        const request = await fetch(`https://api.unsplash.com/photos/random?count=30&client_id=${id}`);
        
        if(request.ok){
            const data = await request.json();
            return data;
        }
    
        return null;
    }
    catch(error){
        return null;
    }
})