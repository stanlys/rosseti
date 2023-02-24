import { combineReducers, configureStore } from "@reduxjs/toolkit";
import PostLetterReducer from "./postLetter/slice";
import OutgoingReducer from "./outgoing/slice";
import DeliveryOrganization from "./Delivery/slice";

const rootReducer = combineReducers({
  postLetter: PostLetterReducer,
  outgoing: OutgoingReducer,
  deliveryOrganization: DeliveryOrganization,
});

export const store = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore["dispatch"];
