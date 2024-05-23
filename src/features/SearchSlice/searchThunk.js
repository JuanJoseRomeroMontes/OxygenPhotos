import { createAsyncThunk } from "@reduxjs/toolkit";

export const FetchSearchThunk = createAsyncThunk("search/fetchSearchThunk", async () => {
    try{
        const request = await fetch('https://api.unsplash.com/photos?per_page=30&client_id=4RUVzEbQU_Izhy7q9OhvZ6wY4t612GDqkjTxTG2PqxY');

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

export const FetchSearchDescriptionThunk = createAsyncThunk("search/fetchSearchDescriptionThunk", async (data) => {
    try{

        if(data === "")
        {
            const request = await fetch('https://api.unsplash.com/photos/random?count=30&client_id=4RUVzEbQU_Izhy7q9OhvZ6wY4t612GDqkjTxTG2PqxY');
        }
        else
        {
            const request = await fetch(`https://api.unsplash.com/search/photos?per_page=30&query=${data}&client_id=4RUVzEbQU_Izhy7q9OhvZ6wY4t612GDqkjTxTG2PqxY'`);
        }

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