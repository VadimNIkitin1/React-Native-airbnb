import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Destination } from "../screens/Destination/Destination";
import { Guests } from "../screens/Guests/Guests";
import { BottomTabNavigator } from "./BottomTabNavigator";
import { SearchResult } from "../screens/SearchResult/SearchResult";
import { PostScreen } from "../screens/PostScreen/PostScreen";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Home"}
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name={"Destination"} component={Destination} />
        <Stack.Screen name={"Guests"} component={Guests} />
        <Stack.Screen name={"SearchResult"} component={SearchResult} />
        <Stack.Screen
          name={"Post"}
          component={PostScreen}
          options={{
            title: "Accommodation",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { Router };
