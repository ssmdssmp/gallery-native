import { IImage } from "../types/Image";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import {
  setActiveImage,
  setActiveImageList,
} from "../store/reducers/gallerySlice";
import { View, TouchableHighlight, Image } from "react-native";
import tw from "twrnc";
const ListImage = ({
  image,
  navigation,
}: {
  image: IImage;
  navigation: any;
}) => {
  const { list, currentPage } = useAppSelector(({ gallery }) => gallery);
  const dispatch = useAppDispatch();

  const { activeImage } = useAppSelector(({ gallery }) => gallery);
  return (
    <TouchableHighlight
      style={tw`p-[2px] w-1/4`}
      onPress={() => {
        navigation.navigate("ActiveImage");
        dispatch(setActiveImage(image));
        dispatch(setActiveImageList(list.indexOf(image)));
      }}
    >
      <Image
        style={tw` h-22 w-full`}
        source={{ uri: image.urls.small }}
      ></Image>
    </TouchableHighlight>
  );
};

export default ListImage;
