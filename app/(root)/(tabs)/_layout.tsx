import { Stack } from "expo-router";
import { View, Text } from "react-native";
const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ headerShown: false }} />
    </Stack>
  );
};
export default Layout;
