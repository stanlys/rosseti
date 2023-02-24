import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";
import { axiosInstance } from "../../api/letter";
import { API_ENDPOINTS } from "../../api/URL";
import { ICreatedLetter, ILetter } from "../../interfaces/letter";

export const getAllOutgoingLetter = createAsyncThunk<
  Array<ILetter>,
  void,
  { rejectValue: string }
>("outgoing/all", async (_, { rejectWithValue }) => {
  try {
    const response: AxiosResponse<ILetter[]> = await axiosInstance.get(
      API_ENDPOINTS.OUTGOING
    );
    return response.data;
  } catch (e) {
    const error = e as AxiosError;
    return rejectWithValue(error.message);
  }
});

export const createOutgoingLetter = createAsyncThunk<
  ILetter,
  ICreatedLetter,
  { rejectValue: string }
>("outgoing/create", async (createdLetter, { rejectWithValue }) => {
  try {
    console.log("send", createdLetter);
    const letter: AxiosResponse<ILetter> = await axiosInstance.post(
      API_ENDPOINTS.OUTGOING,
      createdLetter
    );
    return letter.data;
  } catch (err) {
    const error = err as AxiosError;
    return rejectWithValue(error.message);
  }
});

export const deleteOutgoingLetterById = createAsyncThunk<
  ILetter,
  string,
  { rejectValue: string }
>("outgoing/delete", async (id, { rejectWithValue }) => {
  try {
    const letter: AxiosResponse<ILetter> = await axiosInstance.delete(
      API_ENDPOINTS.OUTGIONG_BY_ID(id)
    );
    return letter.data;
  } catch (err) {
    const error = err as AxiosError;
    return rejectWithValue(error.message);
  }
});

// export const getOutgoingLetterById = createAsyncThunk<
//   ILetter | string,
//   string,
//   { rejectValue: string }
// >("outgoing/getbyid", async (id, { rejectWithValue }) => {
//   try {
//     const letter: AxiosResponse<ILetter> = await axiosInstance.get(
//       API_ENDPOINTS.OUTGIONG_BY_ID(id)
//     );
//     return letter;
//   } catch (err) {
//     const error = err as AxiosError;
//     return rejectWithValue(error.message);
//   }
// });


export const getOutgoingLetterById = createAsyncThunk<
  ILetter,
  string,
  { rejectValue: string }
>("outgoing/delete", async (id, { rejectWithValue }) => {
  try {
    const letter: AxiosResponse<ILetter> = await axiosInstance.get(
      API_ENDPOINTS.OUTGIONG_BY_ID(id)
    );
    return letter.data;
  } catch (err) {
    const error = err as AxiosError;
    return rejectWithValue(error.message);
  }
});