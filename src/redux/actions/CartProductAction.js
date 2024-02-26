import { ActionTypes } from "../Constants"

export const setCartProductValue = (value) => {
    console.log("called")
    return {
        type: ActionTypes.SET_CART_PRODUCTS_VALUE,
        payload: value,
    }
}

export const setCartProductItems = (items) => {
    console.log("items<<<", items);
    return {
        type: ActionTypes.SET_CART_PRODUCT_ITEMS,
        payload: items,
    };
}