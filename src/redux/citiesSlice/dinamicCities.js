import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cities: [],
  loading: false,
  error: null,
};

const dinamicCitiesSlice = createSlice({
  name: 'dinamicCities',
  initialState,
  reducers: {
    testFunction: (state, action) => {
      console.log("dinamic cities" + action.payload);
      state.cities = action.payload;
    }
  },
});

export const { testFunction } = dinamicCitiesSlice.actions;
export default dinamicCitiesSlice.reducer;