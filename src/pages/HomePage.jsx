import { useDispatch } from "react-redux";
import { testFunction } from "../redux/citiesSlice/staticCities";

import SearchBar from "../components/SearchBar";
import Cities from "../components/Cities";

const HomePage = () => {
  const dispatch = useDispatch();
  dispatch(testFunction(" : hello static cities"));
  return (
    <div>
      <SearchBar />
      <Cities />
    </div>
  );
}

export default HomePage;