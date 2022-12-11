import React, { useEffect } from "react";
import { Text, View } from "react-native";

type Props = {
  route?: any;
  navigation: any;
};
export const BaconScreen = ({ route, navigation }: Props) => {
  const { item } = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: item,
    });
  }, []);
  return (
    <View
      style={{
        padding: 15,
        margin: 10,
        borderRadius: 15,
        borderBottomWidth: 5,
        borderBottomColor: "#ebf1fa",
        backgroundColor: "white",
      }}
    >
      <Text>{item}</Text>
    </View>
  );
};
