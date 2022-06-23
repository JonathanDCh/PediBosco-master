import { View, Text, ScrollView, Image } from "react-native";
import React from "react";

const items = [
  {
    image: require("../assets/images/shopping-bag.png"),
    text: "Recoger",
  },
  {
    image: require("../assets/images/soft-drink.png"),
    text: "Bebidas",
  },
  {
    image: require("../assets/images/bread.png"),
    text: "Repostería",
  },
  {
    image: require("../assets/images/fast-food.png"),
    text: "Comida Rápida",
  },
  {
    image: require("../assets/images/deals.png"),
    text: "Chips",
  },
  {
    image: require("../assets/images/coffee.png"),
    text: "Café",
  },
];

export default function Categories() {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* loop starts here */}
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
            <Image
              source={item.image}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
              }}
            />
            <Text
              style={{
                fontSize: 13,
                fontWeight: "700",
              }}
            >
              {item.text}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
