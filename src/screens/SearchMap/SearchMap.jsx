import { useState } from "react";
import { View, Text } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import styles from "./styles";
import { CustomMarker } from "../../components/Custom Marker/CustomMarker";
import places from "../../../assets/data/feed";

const SearchMap = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
      >
        {places.map((pl) => (
          <CustomMarker
            key={pl.id}
            coordinate={pl.coordinate}
            price={pl.newPrice}
            isSelected={pl.id === selectedPlace}
            onPress={() => setSelectedPlace(pl.id)}
          />
        ))}
      </MapView>
    </View>
  );
};

export { SearchMap };
