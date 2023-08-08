import { configureStore } from "@reduxjs/toolkit";
import staticCitiesReducer from "./citiesSlice/staticCities";
import dinamicCitiesReducer from "./citiesSlice/dinamicCities";

export default configureStore({
  reducer: {
    staticCities: staticCitiesReducer,
    dinamicCities: dinamicCitiesReducer
  }
});
