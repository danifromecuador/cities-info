import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  cities: [],
  loading: false,
  error: null,
};

const staticCitiesSlice = createSlice({
  name: 'staticCities',
  initialState,
  reducers: {
    testFunction: (state, action) => {
      console.log("static cities" + action.payload);
      state.cities = action.payload;
    }
  },
});

export const { testFunction } = staticCitiesSlice.actions;