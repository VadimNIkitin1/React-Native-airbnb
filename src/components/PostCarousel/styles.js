import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 120,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  innerContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    aspectRatio: 1,
    resizeMode: "cover",
  },
  bedrooms: {
    marginVertical: 10,
    color: "#5b5b5b",
  },
  description: {
    fontSize: 15,
  },
  prices: {
    fontSize: 15,
    marginVertical: 10,
  },
  oldPrice: {
    color: "#5b5b5b",
    textDecorationLine: "line-through",
  },
  newPrice: {
    fontWeight: "bold",
  },
  total: {
    color: "#5b5b5b",
    textDecorationLine: "underline",
  },
});
export default styles;
