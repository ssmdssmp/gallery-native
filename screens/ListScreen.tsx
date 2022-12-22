import { View, TouchableHighlight, Text } from "react-native";
import { nanoid } from "@reduxjs/toolkit";
import ListImage from "../components/ListImage";
import { useAppSelector } from "../hooks/redux";
import { fetchImages } from "../hooks/http";
import { useEffect } from "react";
import tw from "twrnc";
import Spinner from "../assets/spinner";
import { nextImage, prevImage } from "../hooks/http";
import { useAppDispatch } from "../hooks/redux";

const ListScreen = ({ navigation }: any) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchImages(1));
  }, []);
  const { isLoading, list, currentPage } = useAppSelector(
    ({ gallery }) => gallery
  );

  return (
    <View style={tw`w-full  flex-col mt-5 items-center`}>
      <View style={tw`flex-row flex-wrap h-[500px]`}>
        {isLoading ? (
          <Spinner />
        ) : (
          list.map((item) => (
            <ListImage key={nanoid()} image={item} navigation={navigation} />
          ))
        )}
      </View>
      <View style={tw`mt-2 mr-5 flex flex-row  justify-center items-center`}>
        <View style={tw`mr-6`}>
          <TouchableHighlight
            onPress={() => {
              if (currentPage !== 1) {
                dispatch(prevImage(currentPage - 1));
              }
            }}
          >
            <View
              style={tw`flex w-15 h-15 bg-sky-400 items-center justify-center`}
            >
              <Text style={tw` text-white text-[20px]`}> {"<"} </Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={tw`flex w-15 h-15 bg-sky-400 items-center justify-center`}>
          <TouchableHighlight
            onPress={() => {
              console.log(list);
              dispatch(nextImage(currentPage + 1));
            }}
          >
            <View
              style={tw`flex w-5 h-5 bg-sky-400 items-center justify-center`}
            >
              <Text style={tw`text-white text-[20px]`}>{">"}</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default ListScreen;
