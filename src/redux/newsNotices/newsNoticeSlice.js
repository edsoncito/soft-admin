import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: false,
  // isLoading: {
  //   getAll: false,
  //   update: false,
  //   create: false,
  //   delete: false,
  // },
  isLoading: false,
  error: false,
};

const newsNotice = createSlice({
  name: "newsNotice",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    hasError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    getAllNotice: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    createNotice: (state, action) => {
      state.data.products.push(action.payload.product);
      state.isLoading = false;
    },
    deleteNotice: (state, action) => {
      const item = state.data.products.filter((p) => p._id !== action.payload.productDeleted._id);
      state.data.products = item;
      state.isLoading = false;
    },
    updateNotice: (state, action) => {
      const index = state.data.products.findIndex(
        (p) => p._id === action.payload.updatedProduct._id
      );
      state.data.products.splice(index, 1, action.payload.updatedProduct);
      state.isLoading = false;
    },
  },
});

export const { startLoading, hasError, getAllNotice, createNotice, deleteNotice, updateNotice } =
  newsNotice.actions;

export default newsNotice.reducer;
