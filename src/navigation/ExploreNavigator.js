import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home/Home";
import { TopTabNavigator } from "./TopTabNavigator";

const Stack = createNativeStackNavigator();

const ExploreNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="SearchResults"
        component={TopTabNavigator}
        options={{
          title: "Search your destination",
        }}
      />
    </Stack.Navigator>
  );
};

export { ExploreNavigator };
