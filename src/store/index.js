import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";

// Create redux store
const store = configureStore({
  reducer: {
    // here songs is a key to big state object
    // songsSlice.reducer is build from all the functions
    // delcared in redurcers object in songsSlice. (See above)
    songs: songsReducer,
    movies: moviesReducer
  }
});

export { store, reset, addSong, removeSong, addMovie, removeMovie };
