import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 10.99, available: true },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 15.99, available: true },
  ],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
    updateProduct: (state, action) => {
      const { id, name, description, price, available } = action.payload;
      const product = state.products.find((p) => p.id === id);
      if (product) {
        product.name = name;
        product.description = description;
        product.price = price;
        product.available = available;
      }
    },
    toggleAvailability: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload);
      if (product) {
        product.available = !product.available;
      }
    },
  },
});

export const { addProduct, removeProduct, updateProduct, toggleAvailability } = productsSlice.actions;
export default productsSlice.reducer;