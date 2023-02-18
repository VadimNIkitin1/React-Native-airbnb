import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  marker: {
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 20,
    borderColor: "grey",
    borderWidth: 1,
  },
  markerText: {
    fontWeight: "bold",
  },
  markerSelected: {
    backgroundColor: "#000",
    padding: 5,
    borderRadius: 20,
    borderColor: "grey",
    borderWidth: 1,
  },
  markerTextSelected: {
    fontWeight: "bold",
    color: "#fff",
  },
});

export default styles;
