import { NavigatorScreenParams, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BaconScreen } from "../baconScreen";

type Props = {
  navigation: any;
};
export const BaconsScreen = ({ navigation }: Props) => {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  const fetchBacon = () => {
    setLoading(true);
    fetch("https://baconipsum.com/api/?type=meat-and-filler&paras=10")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    fetchBacon();
  }, []);

  const renderLoading = () => {
    return (
      <View>
        <Text> Loading...</Text>
      </View>
    );
  };

  return (
    <View
      style={{
        paddingTop: 15,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {loading && renderLoading()}
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("FullInfoAboutBacon", { item })}
          >
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
              <Text>
                {index + 1}. {item.slice(0, item.indexOf("."))}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={fetchBacon} />
        }
      />
    </View>
  );
};
