import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const Guests = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.row}>
          <View style={styles}>
            <Text style={{ fontWeight: "bold" }}>Adults</Text>
            <Text style={{ color: "#8d8d8d" }}>Age 13 or above</Text>
          </View>
          <View style={styles.counter}>
            <Pressable
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={styles.btn}
            >
              <Text style={{ fontSize: 20, color: "#474747" }}>-</Text>
            </Pressable>
            <Text style={styles.counterValue}>{adults}</Text>
            <Pressable onPress={() => setAdults(adults + 1)} style={styles.btn}>
              <Text style={{ fontSize: 20, color: "#474747" }}>+</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles}>
            <Text style={{ fontWeight: "bold" }}>children</Text>
            <Text style={{ color: "#8d8d8d" }}>Ages 2-12</Text>
          </View>
          <View style={styles.counter}>
            <Pressable
              onPress={() => setChildren(Math.max(0, children - 1))}
              style={styles.btn}
            >
              <Text style={{ fontSize: 20, color: "#474747" }}>-</Text>
            </Pressable>
            <Text style={styles.counterValue}>{children}</Text>
            <Pressable
              onPress={() => setChildren(children + 1)}
              style={styles.btn}
            >
              <Text style={{ fontSize: 20, color: "#474747" }}>+</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles}>
            <Text style={{ fontWeight: "bold" }}>infants</Text>
            <Text style={{ color: "#8d8d8d" }}>Under 2 </Text>
          </View>
          <View style={styles.counter}>
            <Pressable
              onPress={() => setInfants(Math.max(0, infants - 1))}
              style={styles.btn}
            >
              <Text style={{ fontSize: 20, color: "#474747" }}>-</Text>
            </Pressable>
            <Text style={styles.counterValue}>{infants}</Text>
            <Pressable
              onPress={() => setInfants(infants + 1)}
              style={styles.btn}
            >
              <Text style={{ fontSize: 20, color: "#474747" }}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View>
        <Pressable
          style={styles.searchBtn}
          onPress={() =>
            navigation.navigate("Home", {
              screen: "Explore",
              params: {
                screen: "SearchResults",
              },
            })
          }
        >
          <Text style={styles.searchBtnText}>Search</Text>
        </Pressable>
      </View>
    </View>
  );
};
export { Guests };
