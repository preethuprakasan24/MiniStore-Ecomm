
import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant"


export const cartData = (data = [], action) => {

    switch (action.type) {
        case ADD_TO_CART:
            console.log("ADD_TO_CART condition", action.data)
            return [action.data, ...data];

        case REMOVE_FROM_CART:
            console.log("REMOVE_FROM_CART condition", action.data)
            // data.length = data.length ? data.length - 1 : []
            const remainingItem = data.filter((item) => item.id !== action.data)
            return [...remainingItem];


        case EMPTY_CART:
            console.log("EMPTY_CART condition", action.data)
            data = []
            return [...data];
        default:
            return data
    }

}