import PlaceForm from "../components/Places/PlaceForm";

function AddPlace({ navigation }) {
  function createPlaceHandler(place) {
    navigation.navigate("AllPlaces",{
        place: place
    });
  }

  return <PlaceForm />;
}

export default AddPlace;
