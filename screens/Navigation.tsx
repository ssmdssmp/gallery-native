import ListScreen from "./ListScreen";
import { NavigationContainer } from "@react-navigation/native";
import ActiveImageScreen from "./ActiveImageScreen";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchImages } from "../hooks/http";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export const Navigation = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchImages(1));
  }, []);
  const { activeImage } = useAppSelector(({ gallery }) => gallery);
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator>
        <Drawer.Screen name="List" component={ListScreen} />
        <Drawer.Screen
          name="ActiveImage"
          component={ActiveImageScreen}
          options={{
            title: activeImage.user.last_name
              ? activeImage.user.first_name + " " + activeImage.user.last_name
              : activeImage.user.first_name,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
