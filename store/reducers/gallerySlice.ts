import { createSlice, current } from "@reduxjs/toolkit";
import { fetchImages, nextPage, prevPage } from "../../hooks/http";
import { IImage } from "../../types/Image";
interface IGalleryState {
  activeImage: IImage;
  activeImageList: IImage[];
  list: IImage[];
  currentPage: number;
  isLoading: boolean;
}
const initialState: IGalleryState = {
  activeImage: {
    id: "",
    urls: {
      small: "",
      regular: "",
    },
    user: {
      first_name: "",
      last_name: "",
    },
    description: "",
  },
  activeImageList: [],
  list: [],
  currentPage: 1,
  isLoading: false,
};
const gallerySlice = createSlice({
  name: "gallery",
  initialState: initialState,
  reducers: {
    setActiveImage: (state, { payload }: { payload: IImage }) => {
      state.activeImage = payload;
    },
    setActiveImageList: (state, { payload }: { payload: number }) => {
      state.activeImageList = [...state.list].splice(payload, 4);
    },
    nextImage: (state, { payload }: { payload: number }) => {
      state.activeImageList.push(state.list[payload]);
      state.activeImageList.shift();
    },
    prevImage: (state, { payload }: { payload: number }) => {
      state.activeImageList.unshift(state.list[payload]);
      state.activeImageList.pop();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.fulfilled, (state, { payload }) => {
        state.activeImage = payload[0];
        state.list = payload;
        state.activeImageList = [...payload.slice(0, 4)];
        state.isLoading = false;
      })
      .addCase(fetchImages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchImages.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(nextPage.fulfilled, (state, { payload }) => {
        state.list = payload;
        state.activeImage = payload[0];
        state.activeImageList = payload.slice(0, 4);
        state.currentPage = state.currentPage + 1;
        state.isLoading = false;
      })
      .addCase(nextPage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(prevPage.fulfilled, (state, { payload }) => {
        state.list = payload;
        state.activeImageList = [...payload].splice(payload.length - 4, 4);
        state.currentPage = state.currentPage - 1;
        state.isLoading = false;
      })
      .addCase(prevPage.pending, (state) => {
        state.isLoading = true;
      });
  },
});
export const { setActiveImage, setActiveImageList, nextImage, prevImage } =
  gallerySlice.actions;
export default gallerySlice.reducer;
