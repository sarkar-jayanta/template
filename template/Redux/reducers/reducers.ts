import {createSlice} from '@reduxjs/toolkit';
import {InitialState} from '../types';

//define your initial state variables
export const initialState: InitialState = {
  isLogin: false,
};

export const reducer = createSlice({
  name: 'global',
  initialState,
  reducers: {
    isUserLogin: (state, action) => {
      //state.isLogin = action.payload;
    },
  },
  //add extra reducers.
  extraReducers: builder => {
    builder;
    // .addCase(Login.pending, (state) => {
    //   state.isLoading = true;
    // })
  },
});

export const {isUserLogin} = reducer.actions;
export default reducer.reducer;
