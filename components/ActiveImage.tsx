import { Image, View, Text } from "react-native";
import { useAppSelector } from "../hooks/redux";
import tw from "twrnc";
import Spinner from "../assets/spinner";
const ActiveImage = () => {
  const { activeImage, isLoading } = useAppSelector(({ gallery }) => gallery);

  return (
    <View
      style={tw`w-full h-[400px] relative flex items-center justify-center rounded-md overflow-hidden`}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Image
            style={tw`w-full h-full object-cover`}
            source={{ uri: activeImage.urls.regular }}
          ></Image>
          <Text style={tw`absolute bottom-10 m-auto text-white text-2xl`}>
            {activeImage.user.last_name
              ? activeImage.user.first_name + " " + activeImage.user.last_name
              : activeImage.user.first_name}
          </Text>
        </>
      )}
    </View>
  );
};

export default ActiveImage;
