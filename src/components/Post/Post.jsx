import { Text, View, Image, Pressable } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const Post = (props) => {
  const {
    image,
    type,
    title,
    bed,
    bedroom,
    oldPrice,
    newPrice,
    totalPrice,
    id,
  } = props.post;

  const navigation = useNavigation();

  const goToPostScreen = () => {
    navigation.navigate("Post", { postId: id });
  };

  return (
    <Pressable onPress={goToPostScreen} style={styles.container}>
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
    </Pressable>
  );
};

export { Post };
