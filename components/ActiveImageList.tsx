import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { View, Image, TouchableHighlight } from "react-native";
import { useAppSelector } from "../hooks/redux";
import tw from "twrnc";
import { useAppDispatch } from "../hooks/redux";
import { IImage } from "../types/Image";
import {
  nextImage,
  setActiveImage,
  prevImage,
} from "../store/reducers/gallerySlice";
import { nextPage, prevPage } from "../hooks/http";
const ActiveImageList = () => {
  const { activeImageList, list, currentPage, activeImage } = useAppSelector(
    ({ gallery }) => gallery
  );
  const dispatch = useAppDispatch();
  const navigation = (item: IImage) => {
    dispatch(setActiveImage(item));
    if (activeImageList.indexOf(item) === 3) {
      if (list.indexOf(item) !== list.length - 1) {
        dispatch(nextImage(list.indexOf(item) + 1));
      } else {
        dispatch(nextPage(currentPage + 1));
      }
    }
    if (activeImageList.indexOf(item) === 0) {
      if (list.indexOf(item) !== 0) {
        dispatch(prevImage(list.indexOf(item) - 1));
      } else {
        if (currentPage !== 1) {
          dispatch(prevPage(currentPage - 1));
        }
      }
    }
  };
  return (
    <View style={tw`w-full flex-row  justify-between mt-5`}>
      {activeImageList.map((item) => {
        return (
          <TouchableHighlight key={nanoid()} onPress={() => navigation(item)}>
            <Image
              style={tw`h-22 w-22 rounded-md  ${
                activeImage.id === item.id ? "border-2 border-orange-500" : ""
              }`}
              source={{ uri: item.urls.small }}
            ></Image>
          </TouchableHighlight>
        );
      })}
    </View>
  );
};

export default ActiveImageList;
