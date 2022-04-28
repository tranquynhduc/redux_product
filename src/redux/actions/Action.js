
import { SET_PRODUCT, SELETED_PRODUCTS, REMOVE_PRODUCT } from './ActionType';

export const setProduct = (products) => {
    return {
        type: SET_PRODUCT,
        payload:products
    }
}

export const selectedProduct = (product) => {       
    return {
        type: SELETED_PRODUCTS,
        payload:product
    }
}

export const removeProduct = () => {
    return {
        type: REMOVE_PRODUCT,
        
    }
}

