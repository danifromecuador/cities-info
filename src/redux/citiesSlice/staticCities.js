import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cities: [],
  loading: false,
  error: null,
};

const GEOCODEAPIENDPOINT = 'https://api.openweathermap.org/geo/1.0/direct?';
const CITIESAIRPOLLUTIONENDPOINT = 'https://api.openweathermap.org/data/2.5/air_pollution?';
const WEATHERAPIKEY = "bb97736519c9fc5db2374f27ed914c13";

const geoCode = async (city) => {
  try {
    const response = await fetch(`${GEOCODEAPIENDPOINT}q=${city}&appid=${WEATHERAPIKEY}`);
    const data = await response.json();
    return { city, country: data[0].country, lat: data[0].lat, lon: data[0].lon };
  } catch (error) {
    throw Error(error);
  }
}

const citiesAirQuality = async (city) => {
  try {
    const { lat, lon } = await geoCode(city);
    const response = await fetch(`${CITIESAIRPOLLUTIONENDPOINT}lat=${lat}&lon=${lon}&appid=${WEATHERAPIKEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw Error(error);
  }
}

export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  try {
    const mainCitiesWorldwideData = await Promise.all(main100Cities.map((city) => citiesAirQuality(city)));
    return mainCitiesWorldwideData;
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
});

export const { testFunction } = staticCitiesSlice.actions;
export default staticCitiesSlice.reducer;