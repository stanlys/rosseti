import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDelivery, ILoadingDelivery } from "../../interfaces/delivery";
import {
  addDeliveryOrganization,
  deleteDeliveryOrganization,
  getAllDeliveryOrganization,
} from "./thunk";

const initialState: ILoadingDelivery = {
  isLoading: false,
  error: null,
  organization: [],
};

export const PostLetterSlice = createSlice({
  name: "delivery",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllDeliveryOrganization.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        getAllDeliveryOrganization.fulfilled,
        (state, action: PayloadAction<Array<IDelivery>>) => {
          state.isLoading = false;
          state.organization = action.payload;
        }
      )
      .addCase(getAllDeliveryOrganization.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error as string;
      })
      .addCase(addDeliveryOrganization.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        addDeliveryOrganization.fulfilled,
        (state, action: PayloadAction<IDelivery>) => {
          state.isLoading = false;
          state.organization.push(action.payload);
        }
      )
      .addCase(addDeliveryOrganization.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteDeliveryOrganization.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        deleteDeliveryOrganization.fulfilled,
        (state, action: PayloadAction<IDelivery>) => {
          state.isLoading = false;
          state.organization = state.organization.filter(
            (postman) => postman._id != action.payload._id
          );
        }
      )
      .addCase(deleteDeliveryOrganization.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default PostLetterSlice.reducer;
