import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

// Important: Redux library uses immer under the hood to manage state object.
// Hence we are allowed to change the state object directly.
const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    // These little reducers addSong and removeSong combines together
    // to make a big reducer which will be used in configureStore functions
    // pattern.
    // 'song' + '/' + 'addSong' = 'song/addSong'
    addSong(state, action) {
      // STATE IS NOT THE BIG STATE OBJECT
      // IN THE STORE
      // IT IS THE PIECE OF STATE MANAGED
      // BY THIS REDUCER
      state.push(action.payload);
    },
    // 'song' + '/' + 'removeSong' = 'song/removeSong'
    removeSong(state, action) {
      // action.payload === string, the song we want to remove
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    }
  },
  // extraReducers is used to piggy back on reducers elsewhere. In this case we are
  // leveraging reset reducer defined in movie slice and we are convencing song slice
  // to use this reducer and update its content in this case resetting songs list.
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  }
});

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
