import { configureStore } from "@reduxjs/toolkit";
import staticCitiesReducer from "./citiesSlice/staticCities";
import dinamicCitiesReducer from "./citiesSlice/dinamicCities";

const store = configureStore({
  reducer: {
    staticCities: staticCitiesReducer,
    dinamicCities: dinamicCitiesReducer
  }
});

export default store;