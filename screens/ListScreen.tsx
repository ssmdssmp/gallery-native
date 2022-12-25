import { View, TouchableHighlight, Text } from "react-native";
import { nanoid } from "@reduxjs/toolkit";
import ListImage from "../components/ListImage";
import { useAppSelector } from "../hooks/redux";
import tw from "twrnc";
import { Button } from "@mui/material";
import Spinner from "../assets/spinner";
import { nextPage, prevPage } from "../hooks/http";
import { useAppDispatch } from "../hooks/redux";

const ListScreen = ({ navigation }: any) => {
  const dispatch = useAppDispatch();
  const { isLoading, list, currentPage } = useAppSelector(
    ({ gallery }) => gallery
  );

  return (
    <View style={tw`w-full  flex-col mt-5 items-center`}>
      <View style={tw`w-full flex-row justify-between flex-wrap  h-7/8`}>
        {isLoading ? (
          <Spinner />
        ) : (
          list.map((item) => (
            <ListImage key={nanoid()} image={item} navigation={navigation} />
          ))
        )}
      </View>
      <View
        style={tw`mt-2 mr-5 h-1/8 flex flex-row  justify-center items-center`}
      >
        {/* <TouchableHighlight
          onPress={() => {
            if (currentPage !== 1) {
              dispatch(prevPage(currentPage - 1));
            }
          }}
        >
          <Button>Prev</Button>
        </TouchableHighlight> */}
        <View style={tw`mr-6`}>
          <TouchableHighlight
            onPress={() => {
              if (currentPage !== 1) {
                dispatch(prevPage(currentPage - 1));
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
              dispatch(nextPage(currentPage + 1));
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
