import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SearchResult } from "../screens/SearchResult/SearchResult";
import { SearchMap } from "../screens/SearchMap/SearchMap";

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#f15454",
        tabBarIndicatorStyle: {
          backgroundColor: "#f15454",
        },
      }}
    >
      <Tab.Screen name="list" component={SearchResult} />
      <Tab.Screen name="map" component={SearchMap} />
    </Tab.Navigator>
  );
};

export { TopTabNavigator };
