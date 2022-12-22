import ActiveImage from "./ActiveImage";
import List from "./List";
import { useEffect } from "react";
import { useAppDispatch } from "../hooks/redux";
import { View } from "react-native";
import { fetchImages } from "../hooks/http";
import tw from "twrnc";
const Layout = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchImages(1));
  });
  return (
    <View style={tw`flex flex-col w-full items-center justify-center relative`}>
      <ActiveImage />
      <List />
    </View>
  );
};

export default Layout;
