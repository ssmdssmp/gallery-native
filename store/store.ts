import { combineReducers, configureStore } from "@reduxjs/toolkit";
import gallerySlice from "./reducers/gallerySlice";
const rootReducer = combineReducers({
  gallery: gallerySlice,
});
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
