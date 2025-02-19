import { createSlice } from "@reduxjs/toolkit";

const InitialFilterState = {
  category: "",
  price: null,
  brand: "",
  sort: "",
  search: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: InitialFilterState,
  reducers: {
    setCategory: (state, action) => {
      if (state.category === action.payload) {
        state.category = ""; // Deselect if the same category is clicked
      } else {
        state.category = action.payload; // Select the new category
      }
    },
    setPrice: (state, action) => {
      if (state.price === action.payload) {
        state.price = null; // Deselect if the same price is clicked
      } else {
        state.price = action.payload; // Select the new price
      }
    },
    setBrand: (state, action) => {
      if (state.brand === action.payload) {
        state.brand = ""; // Deselect if the same brand is clicked
      } else {
        state.brand = action.payload; // Select the new brand
      }
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },

    resetFilter: () => InitialFilterState,
  },
});
export default filterSlice;

export const {
  setCategory,
  setPrice,
  setBrand,
  setSort,
  setSearch,
  resetFilter,
} = filterSlice.actions;
