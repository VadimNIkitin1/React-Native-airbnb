import { useState } from "react";
import { View, Text, FlatList, useWindowDimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import styles from "./styles";
import { CustomMarker } from "../../components/Custom Marker/CustomMarker";
import { PostCarousel } from "../../components/PostCarousel/PostCarousel";
import places from "../../../assets/data/feed";

const SearchMap = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const width = useWindowDimensions().width;
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
      <View style={{ position: "absolute", bottom: 10 }}>
        <FlatList
          data={places}
          renderItem={({ item }) => <PostCarousel post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 50}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
        />
      </View>
    </View>
  );
};

export { SearchMap };
