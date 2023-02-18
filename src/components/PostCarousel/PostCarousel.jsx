import { Text, View, Image, useWindowDimensions } from "react-native";
import styles from "./styles";

const PostCarousel = (props) => {
  const { image, type, title, bed, bedroom, newPrice } = props.post;
  const width = useWindowDimensions().width;

  return (
    <View style={[styles.container, { width: width - 50 }]}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
        <View style={{ marginHorizontal: 10, flex: 1 }}>
          <Text style={styles.bedrooms}>
            {bed} bed {bedroom} bedroom
          </Text>
          <Text style={styles.description} numberOfLines={2}>
            {type} {title}
          </Text>
          <Text style={styles.prices}>
            <Text style={styles.newPrice}>${newPrice} </Text>/ night
          </Text>
        </View>
      </View>
    </View>
  );
};

export { PostCarousel };
