import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../types";
export interface IInitialState {
  isUpdate: boolean;
  data: IProduct;
}
const initialState: IInitialState = {
  isUpdate: false,
  data: {
    name: "",
    category: "",
    subcategory: "",
    brand: "",
    price: 0,
    discount: 0,
    stock: 0,
    thumbnail: "",
    image: "",
    description: "",
  },
};

const updateSlice = createSlice({
  name: "update",
  initialState,
  reducers: {
    updateMode: (state, action) => {
      state.isUpdate = action.payload.isUpdate;
      state.data = action.payload.data;
    },
  },
});
export const { updateMode } = updateSlice.actions;
export default updateSlice;
