import { View, Text, FlatList } from "react-native";
import { Post } from "../../components/Post/Post";
import feed from "../../../assets/data/feed";
import styles from "./styles";

const SearchResult = () => {
  return (
    <View>
      <FlatList data={feed} renderItem={({ item }) => <Post post={item} />} />
    </View>
  );
};

export { SearchResult };
