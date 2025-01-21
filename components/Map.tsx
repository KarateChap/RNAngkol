import { Dimensions, View } from "react-native";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

const Map = () => {
  const region = {};

  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      className="w-full rounded-2xl"
      style={{ flex: 1, height: Dimensions.get("window").height / 3 }}
      tintColor="black"
      mapType="mutedStandard"
      showsPointsOfInterest={false}
      // initialRegion={region}
      showsUserLocation={true}
      userInterfaceStyle="light"
    ></MapView>
  );
};

export default Map;
