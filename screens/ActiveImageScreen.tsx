import React from "react";
import { View } from "react-native";
import ActiveImage from "../components/ActiveImage";
import ActiveImageList from "../components/ActiveImageList";
import Ionicons from "@expo/vector-icons/Ionicons";
import tw from "twrnc";
import { TouchableHighlight } from "react-native-gesture-handler";

const ActiveImageScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={tw`flex flex-col h-full justify-between w-full`}>
      <View style={tw`flex h-11/12 flex-col w-full justify-between`}>
        <ActiveImage />
        <ActiveImageList />
      </View>

      <TouchableHighlight onPress={() => navigation.navigate("List")}>
        <Ionicons
          color="blue"
          style={tw`mb-[5px]`}
          name="chevron-back"
          size={35}
        />
      </TouchableHighlight>
    </View>
  );
};

export default ActiveImageScreen;
