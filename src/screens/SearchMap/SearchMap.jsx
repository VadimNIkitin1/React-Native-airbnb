import { useEffect, useRef, useState } from "react";
import { View, FlatList, useWindowDimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import styles from "./styles";
import { CustomMarker } from "../../components/Custom Marker/CustomMarker";
import { PostCarousel } from "../../components/PostCarousel/PostCarousel";
import places from "../../../assets/data/feed";

const SearchMap = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const ref = useRef();
  const map = useRef();
  const viewConfig = useRef({ itemVisiblePercentThreshold: 70 });
  const onViewChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const selectedPlaceId = viewableItems[0].item;
      setSelectedPlace(selectedPlaceId.id);
    }
  });

  const width = useWindowDimensions().width;

  useEffect(() => {
    if (!selectedPlace || !ref) {
      return;
    }
    const idx = places.findIndex((place) => place.id === selectedPlace);
    ref.current.scrollToIndex({ index: idx });

    const selectedPlaceId = places[idx];
    const region = {
      latitude: selectedPlaceId.coordinate.latitude,
      longitude: selectedPlaceId.coordinate.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    };
    map.current.animateToRegion(region);
  }, [selectedPlace]);
  return (
    <View style={styles.container}>
      <MapView
        ref={map}
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
          ref={ref}
          data={places}
          renderItem={({ item }) => <PostCarousel post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 50}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};

export { SearchMap };
