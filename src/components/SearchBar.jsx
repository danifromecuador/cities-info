import { geoCode } from '../redux/citiesSlice/staticCities'
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


const SearchBar = () => {
  const [input, setInput] = useState('');

  const onChange = (e) => {
    setInput(e.target.value);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    if (input.length > 3) dispatch(geoCode(input));
  }, [input, dispatch]);


  return (
    <input
      type="text"
      placeholder="This is the search bar"
      value={input}
      onChange={onChange}
    />
  );
}

export default SearchBar;

// Path: src/components/SearchBar.jsx