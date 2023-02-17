import { ImageBackground, Pressable, Text, View } from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        style={styles.searchbtn}
        onPress={() => navigation.navigate("Destination")}
      >
        <Fontisto name="search" size="25" color="#f15454" />
        <Text style={styles.searchBtnText}>Where are you going?</Text>
      </Pressable>
      <ImageBackground
        source={require("../../../assets/images/wallpaper.jpg")}
        style={styles.image}
      >
        <Text style={styles.title}>Go near</Text>
        <Pressable style={styles.btn} onPress={() => console.warn("Pressable")}>
          <Text style={styles.btnText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export { Home };
