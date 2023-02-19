import { Text, View, Image, ScrollView } from "react-native";
import styles from "./styles";

const DetailedPost = (props) => {
  const {
    image,
    type,
    title,
    bed,
    bedroom,
    oldPrice,
    newPrice,
    totalPrice,
    description,
  } = props.post;

  return (
    <ScrollView>
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
        <Text style={styles.longDescription}>{description}</Text>
      </View>
    </ScrollView>
  );
};

export { DetailedPost };
