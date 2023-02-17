import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 500,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    fontSize: 80,
    fontWeight: "bold",
    color: "#fff",
    width: "70%",
    marginLeft: 25,
  },
  btn: {
    backgroundColor: "#fff",
    width: 200,
    height: 40,
    borderRadius: 10,
    marginTop: 25,
    marginLeft: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  searchbtn: {
    backgroundColor: "#fff",
    height: 60,
    width: Dimensions.get("screen").width - 20,
    borderRadius: 30,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 10,
    top: 50,
  },
  searchBtnText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default styles;
