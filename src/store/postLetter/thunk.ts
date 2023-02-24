import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";
import { axiosInstance } from "../../api/letter";
import { API_ENDPOINTS } from "../../api/URL";
import { ICreatedPostLetter, IPostLetter } from "../../interfaces/postLetter";

export const getAllPostLetters = createAsyncThunk<
  Array<IPostLetter>,
  void,
  { rejectValue: string }
>("postLetter/all", async (_, { rejectWithValue }) => {
  try {
    const response: AxiosResponse = await axiosInstance.get(
      API_ENDPOINTS.LETTER
    );
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    return rejectWithValue(err.message);
  }
});

export const addPostLetter = createAsyncThunk(
  "postLetter/add",
  async (letter: ICreatedPostLetter, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<IPostLetter, unknown> =
        await axiosInstance.post(API_ENDPOINTS.LETTER, letter);
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      return rejectWithValue(err.message);
    }
  }
);

export const deletePostLetter = createAsyncThunk<
  IPostLetter,
  string,
  { rejectValue: string }
>("postLetter/delete", async (id, { rejectWithValue }) => {
  try {
    const response: AxiosResponse<IPostLetter, unknown> =
      await axiosInstance.delete(API_ENDPOINTS.LETTER_BY_ID(id));
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    return rejectWithValue(err.message);
  }
});
