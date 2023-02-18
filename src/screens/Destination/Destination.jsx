import { useState } from "react";
import { View, TextInput, FlatList, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { SuggestionRow } from "./SuggestionRow";

import styles from "./styles";

const myApi = "AIzaSyBqwMaH88X0VpNvLcKrAtX-goVDdTzB0gY";

const Destination = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate("Guests");
        }}
        fetchDetails
        styles={{
          input: styles.input,
        }}
        query={{
          key: myApi,
          language: "en",
          type: "(cities)",
        }}
        suppressDefaultStyles
        renderRow={(item) => <SuggestionRow item={item} />}
      />
    </View>
  );
};

export { Destination };
