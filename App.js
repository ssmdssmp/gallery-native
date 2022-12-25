import "react-native-gesture-handler";
import { setupStore } from "./store/store";
import { Provider } from "react-redux";
import { Navigation } from "./screens/Navigation";
const store = setupStore();

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
