import { createSlice } from "@reduxjs/toolkit";

const MyCartSlice = createSlice({
    name: 'cart',
    initialState: [

    ],
    reducers: {

      


        removeMyCartitem(state, action) {
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
                    price: productToAdd.price,
                    qty: productToAdd.qty,
                   
                    subtotal: productToAdd.subtotal,
                   
                    image: productToAdd.image,
                  
                });
            }
        },
        deleteMyCartitem(state, action) {

            return (state = state.filter(item => item.id != action.payload));
        },

        clearMyCart(state, action) {
            // This reducer will clear all cart items
            return [];
        },

        addProductToMyCart(state, action) {
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
                    price: productToAdd.price,
                    qty: productToAdd.qty,
                    
                    subtotal: productToAdd.subtotal,
                    
                    image: productToAdd.image,
                    
                   
                });
            }
        },

    },
});

export const { addProductToMyCart, removeMyCartitem, deleteMyCartitem, clearMyCart } = MyCartSlice.actions;
export default MyCartSlice.reducer;