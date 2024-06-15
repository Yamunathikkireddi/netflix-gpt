import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null
    },
    reducers:{
        addNowPlayingMovies:(state, action) => {
            console.log("add now playing funtion started");
            console.log(action.payload);
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo:(state, action) =>{
            state.trailerVideo = action.payload;
        }
    },
});
export const {addNowPlayingMovies, addTrailerVideo} = moviesSlice.actions;
export default moviesSlice.reducer;