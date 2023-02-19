import {
  Text,
  View,
  Image,
  useWindowDimensions,
  Pressable,
} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const PostCarousel = (props) => {
  const { image, type, title, bed, bedroom, newPrice, id } = props.post;
  const width = useWindowDimensions().width;

  const navigation = useNavigation();

  const goToPostScreen = () => {
    navigation.navigate("Post", { postId: id });
  };

  return (
    <Pressable
      onPress={goToPostScreen}
      style={[styles.container, { width: width - 50 }]}
    >
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
    </Pressable>
  );
};

export { PostCarousel };
