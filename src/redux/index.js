import { configureStore } from "@reduxjs/toolkit";
import reviewsSlice from "./reducers/reviewsReducer";
import basketReducer from "./reducers/basketReducer";

export const store = configureStore({
  reducer: {
    reviews: reviewsSlice,
    basket: basketReducer,
  },
});
