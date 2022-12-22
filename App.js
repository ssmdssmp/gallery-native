import Layout from "./components/Layout";
import { setupStore } from "./store/store";
import { Provider } from "react-redux";
const store = setupStore();

export default function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}
