import { Image, View, Text } from "react-native";
import { useAppSelector } from "../hooks/redux";
import tw from "twrnc";
import { TouchableHighlight } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import Spinner from "../assets/spinner";
const ActiveImage = () => {
  const { activeImage, isLoading } = useAppSelector(({ gallery }) => gallery);

  return (
    <View
      style={tw`w-full h-10/12  relative flex items-center justify-center  overflow-hidden`}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Image
            style={tw`w-full h-full`}
            source={{ uri: activeImage.urls.small }}
          ></Image>
          <Text style={tw`absolute bottom-10 m-auto text-white text-2xl`}>
            {activeImage.description
              ? activeImage.description.length > 30
                ? activeImage.description.slice(0, 30) + "..."
                : activeImage.description
              : activeImage.user.last_name
              ? activeImage.user.first_name + " " + activeImage.user.last_name
              : activeImage.user.first_name}
          </Text>

          <View style={tw`absolute top-2 right-2-2`}>
            <TouchableHighlight
              underlayColor="rgba(0,0,0,0.1)"
              onPress={() => {}}
            >
              <Ionicons
                name="bookmark-outline"
                size={25}
                color="white"
                style={tw`opacity-60`}
              />
            </TouchableHighlight>
          </View>
          <View style={tw`absolute bottom-3 `}>
            <TouchableHighlight
              underlayColor="rgba(0,0,0,0.1)"
              onPress={() => {}}
            >
              <Ionicons
                name="chevron-up"
                size={25}
                color="white"
                style={tw`opacity-40`}
              />
            </TouchableHighlight>
          </View>
        </>
      )}
    </View>
  );
};

export default ActiveImage;
