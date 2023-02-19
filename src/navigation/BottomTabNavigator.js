import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Home } from "../screens/Home/Home";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Feather from "@expo/vector-icons/Feather";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { ExploreNavigator } from "./ExploreNavigator";
import { SearchMap } from "../screens/SearchMap/SearchMap";
import { PostScreen } from "../screens/PostScreen/PostScreen";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator activeColor="#f15454">
      <Tab.Screen
        name="Explore"
        component={ExploreNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="search" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="heart-o" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="airbnb"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="airbnb" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="message-square" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <EvilIcons name="user" size={35} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export { BottomTabNavigator };
