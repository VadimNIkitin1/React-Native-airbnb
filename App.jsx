import { StatusBar } from "react-native";
import "react-native-gesture-handler";

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
