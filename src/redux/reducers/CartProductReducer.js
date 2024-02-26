import { ActionTypes } from "../Constants";

const initialState = {
    totalCartProductsValue: 0,
    totalCartProducts: [], // Each item should have a 'quantity' property
    multiTimeCartItems: 0,
    lastMultipleTimeCartedItem: {}
};

export const CartProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_CART_PRODUCTS_VALUE:
            console.log("enter");
            return {
                ...state,
                totalCartProductsValue: state.totalCartProductsValue + 1
            };

        case ActionTypes.SET_CART_PRODUCT_ITEMS:

        // it is used when i use useState to store the data but now we directly fetch the data from the api(database)
            // const existingItemIndex = state.totalCartProducts.findIndex(item => item.id === action.payload.id);

            // if (existingItemIndex !== -1) {
            //     // Item already exists in the cart
            //     const updatedCart = [...state.totalCartProducts];
            //     updatedCart[existingItemIndex].quantity += 1;

            //     // Update lastMultipleTimeCartedItem if the updated item is the last carted item
            //     return {
            //         ...state,
            //         totalCartProducts: updatedCart,
            //         lastMultipleTimeCartedItem: updatedCart[existingItemIndex]
            //     };
            // } else {
            //     // Item doesn't exist in the cart, add it with quantity 1
            //     const newItem = { ...action.payload, quantity: 1 };
            //     return {
            //         // ...state,
            //         totalCartProducts: [...state.totalCartProducts, newItem],
            //         // lastMultipleTimeCartedItem: newItem
            //     };
            // }

            return {
                ...state,
                totalCartProducts: action.payload
            }

        default:
            return state;
    }
};

