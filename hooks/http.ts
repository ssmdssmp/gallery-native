import { createAsyncThunk } from "@reduxjs/toolkit";
import { IImage } from "../types/Image";
import axios from "axios";
const API_KEY =
  "ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9";
const BASE_URL = "https://api.unsplash.com/photos/?client_id=" + API_KEY;

export const fetchImages = createAsyncThunk<IImage[], number>(
  "gallery/fetchImages",
  async () => {
    return await axios
      .get(BASE_URL, { params: { per_page: 20, page: 1 } })
      .then((res) => res.data);
  }
);
export const nextImage = createAsyncThunk<IImage[], number>(
  "gallery/nextItem",
  async (page) => {
    return await axios
      .get(BASE_URL, { params: { per_page: 20, page: page } })
      .then((res) => {
        console.log(page);
        return res.data;
      });
  }
);
export const prevImage = createAsyncThunk<IImage[], number>(
  "gallery/prevItem",
  async (page) => {
    return await axios
      .get(BASE_URL, { params: { per_page: 20, page: page } })
      .then((res) => {
        console.log(page);
        return res.data;
      });
  }
);
