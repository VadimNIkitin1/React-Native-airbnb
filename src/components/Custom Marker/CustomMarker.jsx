import { View, Text } from "react-native";
import { Marker } from "react-native-maps";

import styles from "./styles";

const CustomMarker = (props) => {
  const { coordinate, price, isSelected, onPress } = props;
  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <View style={isSelected ? styles.markerSelected : styles.marker}>
        <Text
          style={isSelected ? styles.markerTextSelected : styles.markerText}
        >
          ${price}
        </Text>
      </View>
    </Marker>
  );
};

export { CustomMarker };
