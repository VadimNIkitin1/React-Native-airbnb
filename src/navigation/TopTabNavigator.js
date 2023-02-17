import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SearchResult } from "../screens/SearchResult/SearchResult";

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
      <Tab.Screen name="map" component={SearchResult} />
    </Tab.Navigator>
  );
};

export { TopTabNavigator };
