import { SafeAreaView, StatusBar } from "react-native";
import "react-native-gesture-handler";
import { Home } from "./src/screens/Home/Home";
import { SearchResult } from "./src/screens/SearchResult/SearchResult";
import { Destination } from "./src/screens/Destination/Destination";
import { Guests } from "./src/screens/Guests/Guests";
import { Router } from "./src/navigation/Router";

const App = () => {
  return (
    <>
      <StatusBar style="auto" />
      <Router />
    </>
  );
};

export default App;
