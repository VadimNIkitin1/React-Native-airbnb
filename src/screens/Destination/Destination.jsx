import { useState } from "react";
import { View, TextInput, FlatList, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Entypo from "@expo/vector-icons/Entypo";
import search from "../../../assets/data/search";

import styles from "./styles";

const Destination = () => {
  const [value, setValue] = useState("");

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Where are you going?"
        value={value}
        onChangeText={setValue}
      />
      <FlatList
        data={search}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("Guests")}
            style={styles.row}
          >
            <View style={styles.iconContainer}>
              <Entypo name="location-pin" size={35} />
            </View>
            <Text style={styles.location}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export { Destination };
