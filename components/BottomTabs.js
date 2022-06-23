import { View, Text } from "react-native";
import React from "react";

export default function BottomTabs() {
  return (
    <View>
      <BottomTabsText />
    </View>
  );
}

const BottomTabsText = () => <Text>Hola</Text>;
