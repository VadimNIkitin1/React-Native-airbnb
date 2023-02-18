import { View, Text, Pressable } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import styles from "./styles";

const SuggestionRow = ({ item }) => (
  <View style={styles.row}>
    <View style={styles.iconContainer}>
      <Entypo name="location-pin" size={35} />
    </View>
    <Text style={styles.location}>{item.description}</Text>
  </View>
);
export { SuggestionRow };
