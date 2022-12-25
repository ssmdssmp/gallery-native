import { View, TouchableHighlight, Text } from "react-native";
import { nanoid } from "@reduxjs/toolkit";
import ListImage from "../components/ListImage";
import { useAppSelector } from "../hooks/redux";
import tw from "twrnc";
import Ionicons from "@expo/vector-icons/Ionicons";
import Spinner from "../assets/spinner";
import { nextPage, prevPage } from "../hooks/http";
import { useAppDispatch } from "../hooks/redux";

const ListScreen = ({ navigation }: any) => {
  const dispatch = useAppDispatch();
  const { isLoading, list, currentPage } = useAppSelector(
    ({ gallery }) => gallery
  );

  return (
    <View style={tw`w-full  flex-col justify-between`}>
      <View
        style={tw`w-full items-center justify-center flex-row  flex-wrap  h-7/8`}
      >
        {isLoading ? (
          <Spinner />
        ) : (
          list.map((item) => (
            <ListImage key={nanoid()} image={item} navigation={navigation} />
          ))
        )}
      </View>
      <View style={tw`mt-2 mr-5 h-1/8 flex flex-row items-center`}>
        <View style={tw`mr-6`}>
          <TouchableHighlight
            underlayColor="rgba(0,0,0,0.1)"
            onPress={() => {
              if (currentPage !== 1) {
                dispatch(prevPage(currentPage - 1));
              }
            }}
          >
            <Ionicons name="chevron-back-outline" size={35} color="blue" />
          </TouchableHighlight>
        </View>
        <Text style={tw`mr-4`}>Page: {currentPage}</Text>

        <TouchableHighlight
          underlayColor="rgba(0,0,0,0.1)"
          onPress={() => {
            dispatch(nextPage(currentPage + 1));
          }}
        >
          <Ionicons name="chevron-forward" size={35} color="blue" />
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default ListScreen;
