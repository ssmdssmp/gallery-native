import tw from "twrnc";
import ListScreen from "./ListScreen";
import { NavigationContainer } from "@react-navigation/native";
import ActiveImageScreen from "./ActiveImageScreen";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchImages } from "../hooks/http";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
const Drawer = createDrawerNavigator();

export const Navigation = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchImages(1));
  }, []);
  const { activeImage } = useAppSelector(({ gallery }) => gallery);
  return (
    <NavigationContainer independent={true}>
      <GestureHandlerRootView style={tw`w-full h-full flex`}>
        <Drawer.Navigator>
          <Drawer.Screen name="List" component={ListScreen} />
          <Drawer.Screen
            name="ActiveImage"
            component={ActiveImageScreen}
            options={{
              title: "View",
            }}
          />
        </Drawer.Navigator>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};
