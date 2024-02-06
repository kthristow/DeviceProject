import { useEffectuseState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { useIsFocused } from "@react-navigation/native";

function AllPlaces({route}) {

  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const isFocused = useIsFocused()

  useEffect(() => {
    if (route.params && isFocused) {
      const place = route.params.place;
      setLoadedPlaces((prevPlaces) => [...prevPlaces, place]);
    }
  }, [route,isFocused]);

  return <PlacesList places={loadedPlaces}/>;
}

export default AllPlaces;
