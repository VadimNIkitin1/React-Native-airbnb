import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
  },
  counterValue: {
    marginHorizontal: 20,
    fontSize: 16,
  },

  btn: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
  },
  searchBtn: {
    marginBottom: 60,
    backgroundColor: "#f15454",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  searchBtnText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default styles;
