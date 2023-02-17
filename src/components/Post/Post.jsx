import { Text, View, Image } from "react-native";
import styles from "./styles";

const Post = (props) => {
  const { image, type, title, bed, bedroom, oldPrice, newPrice, totalPrice } =
    props.post;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <Text style={styles.bedrooms}>
        {bed} bed {bedroom} bedroom
      </Text>
      <Text style={styles.description} numberOfLines={2}>
        {type} {title}
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${oldPrice}</Text>
        <Text style={styles.newPrice}> ${newPrice} </Text>/ night
      </Text>
      <Text style={styles.totalPrice}>${totalPrice} total</Text>
    </View>
  );
};

export { Post };
