import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import ActiveImage from "../components/ActiveImage";
import ActiveImageList from "../components/ActiveImageList";
import Ionicons from "@expo/vector-icons/Ionicons";
import tw from "twrnc";

const ActiveImageScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={tw`flex flex-col h-full justify-between w-full`}>
      <View style={tw`flex h-11/12 flex-col w-full justify-between`}>
        <ActiveImage />
        <ActiveImageList />
      </View>

      <TouchableHighlight
        underlayColor="rgba(0,0,0,0.1)"
        onPress={() => navigation.navigate("List")}
      >
        <View style={tw`mb-[4px] flex-row items-center `}>
          <Ionicons color="blue" name="chevron-back" size={35} />
          <Text style={tw`ml-2`}>Back to list</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default ActiveImageScreen;
