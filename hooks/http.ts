import { createAsyncThunk } from "@reduxjs/toolkit";
import { IImage } from "../types/Image";
import axios from "axios";

const API_KEY =
  "ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9";
const BASE_URL = "https://api.unsplash.com/photos/?client_id=" + API_KEY;
const length = 24;

export const fetchImages = createAsyncThunk<IImage[], number>(
  "gallery/fetchImages",
  async () => {
    return await axios
      .get(BASE_URL, { params: { per_page: length, page: 1 } })
      .then((res) => res.data);
  }
);
export const nextPage = createAsyncThunk<IImage[], number>(
  "gallery/nextPage",
  async (page) => {
    return await axios
      .get(BASE_URL, { params: { per_page: length, page: page } })
      .then((res) => res.data);
  }
);
export const prevPage = createAsyncThunk<IImage[], number>(
  "gallery/prevPage",
  async (page) => {
    return await axios
      .get(BASE_URL, { params: { per_page: length, page: page } })
      .then((res) => res.data);
  }
);
