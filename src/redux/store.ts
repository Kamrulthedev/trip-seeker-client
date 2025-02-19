import { configureStore } from "@reduxjs/toolkit";
import baseApiSlice from "./baseApi/baseApiSlice";
import cartSlice from "./features/cart/cartSlice";
import filterSlice from "./features/filterProducts/filterSlice";
import quickViewSlice from "./features/quickViewProduct/quickViewSlice";
import updateSlice from "./features/update/updateSlice";
import { imagebbApiSlice } from "./features/uploadImgbb/imagebbApiSlice";

export const store = configureStore({
  reducer: {
    [baseApiSlice.reducerPath]: baseApiSlice.reducer,
    [imagebbApiSlice.reducerPath]: imagebbApiSlice.reducer,
    filter: filterSlice.reducer,
    cart: cartSlice.reducer,
    quickView: quickViewSlice.reducer,
    update: updateSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      baseApiSlice.middleware,
      imagebbApiSlice.middleware
    ),
  devTools: import.meta.env.NODE_ENV !== "production",
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
