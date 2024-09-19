// import { createSlice } from "@reduxjs/toolkit";

// const MyProductSlice = createSlice({
//   name: 'product',
//   initialState: [],
//   reducers: {
//     addMyProduct(state, action) {


//    state.push(action.payload);
//     },
//   },
// });

// export const { addMyProduct } = MyProductSlice.actions;
// export default MyProductSlice.reducer;


////////////////////////////////////////////////////////////////////////////////////////////////////////

import { createSlice } from "@reduxjs/toolkit";

const MyProductSlice = createSlice({
  name: 'product',
  initialState: [

  ],
  reducers: {

    // addMyProduct(state, action) {
    //   const productToAdd = action.payload;
    //   const existingProduct = state.find(item => item.id === productToAdd.id);

    //   if (existingProduct) {
    //     // If the product already exists in the cart, increase its quantity
    //     existingProduct.qty += 1;

    //     // existingProduct.subtotal = existingProduct.qty * existingProduct.totalAmt;

    //     existingProduct.subtotal = existingProduct.qty * existingProduct.price;

    //   } else {
    //     // If the product is not in the cart, add it with quantity 1
    //     state.push({
    //       id: productToAdd.id,
    //       name: productToAdd.name,
    //       product_price: productToAdd.product_price,
    //       qty: 1,
    //       totalAmt: productToAdd.totalAmt,
    //       subtotal: productToAdd.subtotal,
    //       gst: productToAdd.gst,
    //       image: productToAdd.image,
    //       code: productToAdd.code,
    //       costomerId: productToAdd.costomerId,
    //       costomerName: productToAdd.costomerName,
    //       category: productToAdd.category
    //     });
    //   }
    // },



    removeadMyProduct(state, action) {
      const productToAdd = action.payload;
      const existingProduct = state.find(item => item.id === productToAdd.id);

      if (existingProduct) {
        // If the product already exists in the cart, increase its quantity
        existingProduct.qty -= 1;
        // existingProduct.subtotal = existingProduct.qty * existingProduct.totalAmt;
        existingProduct.subtotal = existingProduct.qty * existingProduct.price;
      } else {
        // If the product is not in the cart, add it with quantity 1
        state.push({
          id: productToAdd.id,
          name: productToAdd.name,
          stroked_price: productToAdd.stroked_price,
          main_price: productToAdd.main_price,
          discount: productToAdd.discount,
          qty: 1,
          totalAmt: productToAdd.totalAmt,
          subtotal: productToAdd.subtotal,
          gst: productToAdd.gst,
          image: productToAdd.thumbnail_image,
        });
      }
    },
    deleteadMyProduct(state, action) {

      return (state = state.filter(item => item.id != action.payload));
    },

    clearadMyProduct(state, action) {
      // This reducer will clear all cart items
      return [];
    },

    addMyProduct(state, action) {
      const productToAdd = action.payload;
      const existingProduct = state.find(item => item.id === productToAdd.id);

      if (existingProduct) {
        // If the product already exists in the cart, increase its quantity
        existingProduct.qty += 1;

        // existingProduct.subtotal = existingProduct.qty * existingProduct.totalAmt;

        existingProduct.subtotal = existingProduct.qty * existingProduct.price;

      } else {
        // If the product is not in the cart, add it with quantity 1
        state.push({
          id: productToAdd.id,
          name: productToAdd.name,
          stroked_price: productToAdd.stroked_price,
          main_price: productToAdd.main_price,
          discount: productToAdd.discount,
          qty: 1,
          totalAmt: productToAdd.totalAmt,
          subtotal: productToAdd.subtotal,
          gst: productToAdd.gst,
          image: productToAdd.thumbnail_image,
          rating: productToAdd.rating,


        });
      }
    },

  },
});

export const { addMyProduct, removeadMyProduct, deleteadMyProduct, clearadMyProduct } = MyProductSlice.actions;
export default MyProductSlice.reducer;