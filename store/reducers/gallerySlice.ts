import { createSlice } from "@reduxjs/toolkit";
import { fetchImages, nextImage, prevImage } from "../../hooks/http";
import { IImage } from "../../types/Image";
interface IGalleryState {
  activeImage: IImage;
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
  },
  list: [],
  currentPage: 2,
  isLoading: false,
};
const gallerySlice = createSlice({
  name: "gallery",
  initialState: initialState,
  reducers: {
    setActiveImage: (state, { payload }) => {
      state.activeImage = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.fulfilled, (state, { payload }) => {
        state.activeImage = payload[0];
        state.list = payload;
        state.isLoading = false;
      })
      .addCase(fetchImages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchImages.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(nextImage.fulfilled, (state, { payload }) => {
        if (payload) {
          state.list.push(payload);
          state.list.shift();
          state.activeImage = payload;
        }

        state.currentPage = state.currentPage + 1;
        state.isLoading = false;
      })
      .addCase(nextImage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(prevImage.fulfilled, (state, { payload }) => {
        if (payload) {
          state.list.unshift(payload);
          state.list.pop();
          state.activeImage = payload;
        }
        state.currentPage = state.currentPage - 1;
        state.isLoading = false;
      })
      .addCase(prevImage.pending, (state) => {
        state.isLoading = true;
      });
  },
});
export const { setActiveImage } = gallerySlice.actions;
export default gallerySlice.reducer;
