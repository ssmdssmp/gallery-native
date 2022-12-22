import { nanoid } from "@reduxjs/toolkit";
import tw from "twrnc";
import ListImage from "./ListImage";
import { useAppSelector } from "../hooks/redux";
import { View } from "react-native";

const List = () => {
  const { list } = useAppSelector(({ gallery }) => gallery);

  return (
    <View style={tw`w-full flex-row justify-between mt-5 h-30 `}>
      {list.map((item) => (
        <ListImage key={nanoid()} image={item} />
      ))}
    </View>
  );
};

export default List;
