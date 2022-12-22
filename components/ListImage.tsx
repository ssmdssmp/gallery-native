import { IImage } from "../types/Image";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { nextImage, prevImage } from "../hooks/http";
import { setActiveImage } from "../store/reducers/gallerySlice";
import { View, TouchableHighlight, Image } from "react-native";
import tw from "twrnc";
const ListImage = ({ image }: { image: IImage }) => {
  const { list, currentPage } = useAppSelector(({ gallery }) => gallery);
  const dispatch = useAppDispatch();
  const handleNavigate = (image: IImage) => {
    if (list.indexOf(image) === 3) {
      dispatch(nextImage(currentPage + 3));
    }
    if (list.indexOf(image) === 0 && currentPage !== 1) {
      dispatch(prevImage(currentPage - 3));
    }
    dispatch(setActiveImage(image));
  };
  const { activeImage } = useAppSelector(({ gallery }) => gallery);
  return (
    <View
      style={
        image.id === activeImage.id
          ? tw`h-25 flex  justify-between  rounded-md w-23   overflow-hidden border-2 border-pink-300`
          : tw`h-25 flex  justify-between  rounded-md w-23    overflow-hidden`
      }
    >
      <TouchableHighlight onPress={() => handleNavigate(image)}>
        <Image
          style={tw`h-full w-full`}
          source={{ uri: image.urls.small }}
        ></Image>
      </TouchableHighlight>
    </View>
  );
};

export default ListImage;
