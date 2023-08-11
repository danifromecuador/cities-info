import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  cities: [],
  loading: false,
  error: null,
};

const GEOCODE_API = 'https://api.openweathermap.org/geo/1.0/direct?';
const HOURLY_FORECAST = 'https://pro.openweathermap.org/data/2.5/forecast/hourly?';
const API_KEY = "bb97736519c9fc5db2374f27ed914c13";

export const geoCode = createAsyncThunk('staticCities/geoCode', async (city) => {
  try {
    const response = await fetch(`${GEOCODE_API}q=${city}&appid=${API_KEY}`);
    const data = await response.json();
    return { city, country: data[0].country, lat: data[0].lat, lon: data[0].lon };
  } catch (error) {
    throw Error(error);
  }
});

const staticCitiesSlice = createSlice({
  name: 'staticCities',
  initialState,
  reducers: {
    testFunction: (state, action) => {
      console.log("static cities" + action.payload);
      state.cities = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(geoCode.fulfilled, (state, action) => {
      console.log(action.payload);  
    })
  }    
});

export const { testFunction } = staticCitiesSlice.actions;
export default staticCitiesSlice.reducer;

// Path: src/redux/citiesSlice/staticCities.js