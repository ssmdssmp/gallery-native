import React from "react";
import { View } from "react-native";
import ActiveImage from "../components/ActiveImage";
import ActiveImageList from "../components/ActiveImageList";
import tw from "twrnc";
import BackIcon from "../assets/BackIcon";
import { TouchableHighlight } from "react-native-gesture-handler";
const ActiveImageScreen = () => {
  return (
    <View style={tw`flex flex-col items-center w-full`}>
      <View style={tw`h-12 w-full bg-green-300`}>
        <TouchableHighlight>
          <BackIcon />
        </TouchableHighlight>
      </View>
      <ActiveImage />
      <ActiveImageList />
    </View>
  );
};

export default ActiveImageScreen;
