import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";
import { axiosInstance } from "../../api/letter";
import { API_ENDPOINTS } from "../../api/URL";
import { ICreatedDelivery, IDelivery } from "../../interfaces/delivery";

export const getAllDeliveryOrganization = createAsyncThunk<
  Array<IDelivery>,
  void,
  { rejectValue: string }
>("delivery/all", async (_, { rejectWithValue }) => {
  try {
    const response: AxiosResponse = await axiosInstance.get(
      API_ENDPOINTS.DELIVERY
    );
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    return rejectWithValue(err.message);
  }
});

export const addDeliveryOrganization = createAsyncThunk(
  "delivery/add",
  async (postman: ICreatedDelivery, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<IDelivery, unknown> =
        await axiosInstance.post(API_ENDPOINTS.DELIVERY, postman);
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      return rejectWithValue(err.message);
    }
  }
);

export const deleteDeliveryOrganization = createAsyncThunk<
  IDelivery,
  string,
  { rejectValue: string }
>("delivery/delete", async (id, { rejectWithValue }) => {
  try {
    const response: AxiosResponse<IDelivery, unknown> =
      await axiosInstance.delete(API_ENDPOINTS.DELIVERY_BY_ID(id));
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    return rejectWithValue(err.message);
  }
});
