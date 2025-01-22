import RideLayout from "@/components/RideLayout";
import { useLocationStore } from "@/store";
import { View, Text } from "react-native";

const FindRide = () => {
  const {
    userAddress,
    destinationAddress,
    setDestinationLocation,
    setUserLocation,
  } = useLocationStore();

  return (
    <RideLayout>
      <Text className="text-2xl">Find Ride</Text>
    </RideLayout>
  );
};

export default FindRide;
