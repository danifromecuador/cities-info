import { useDispatch } from "react-redux";
import { testFunction } from "../redux/citiesSlice/dinamicCities";

const DetailsPage = () => {
  const dispatch = useDispatch();
  dispatch(testFunction(" : hello dinamic cities"));
  return (
    <div>
      This is the details page
    </div>
  );
}

export default DetailsPage;
