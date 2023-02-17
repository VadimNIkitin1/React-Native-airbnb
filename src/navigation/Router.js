import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Destination } from "../screens/Destination/Destination";
import { Guests } from "../screens/Guests/Guests";
import { TabNavigator } from "./TabNavigator";
import { SearchResult } from "../screens/SearchResult/SearchResult";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Home"}
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name={"Destination"} component={Destination} />
        <Stack.Screen name={"Guests"} component={Guests} />
        <Stack.Screen name={"SearchResult"} component={SearchResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { Router };
