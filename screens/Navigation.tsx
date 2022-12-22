import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListScreen from "./ListScreen";
import { NavigationContainer } from "@react-navigation/native";
import ActiveImageScreen from "./ActiveImageScreen";
const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="List"
          component={ListScreen}
          options={{ title: ":List" }}
        />
        <Stack.Screen
          name="ActiveImage"
          component={ActiveImageScreen}
          options={{ title: ":List" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
