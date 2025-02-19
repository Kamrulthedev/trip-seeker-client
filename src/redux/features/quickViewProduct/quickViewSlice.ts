import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isOpen: false,
  onClose: () => {},
  product: {},
};

const quickViewSlice = createSlice({
  name: "quickView",
  initialState,
  reducers: {
    openQuickViewModal: (state, action) => {
      state.isLoading = true;
      state.isOpen = true;
      state.product = action.payload.product;
      state.onClose = action.payload.onClose;
      state.isLoading = false;
    },
    closeQuickViewModal: (state) => {
      state.isOpen = false;
      state.product = {};
    },
  },
});

export const { openQuickViewModal, closeQuickViewModal } =
  quickViewSlice.actions;
export default quickViewSlice;
