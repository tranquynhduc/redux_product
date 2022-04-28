import { SELETED_PRODUCTS, REMOVE_PRODUCT } from './../actions/ActionType';
import { SET_PRODUCT } from './../actions/ActionType';

const initailState = {
    products: []
}

export const ProductReducer = (state = initailState, action) => {

    switch (action.type) {
        case SET_PRODUCT:
            return { ...state, products: action.payload }

        default:
            return state;
    }
}

export const selectdProduct = (state = {}, { type, payload }) =>{
    switch (type) {
        case SELETED_PRODUCTS:
            return { ...state, ...payload }
            case REMOVE_PRODUCT:
                return {};
        default:
            return state;
    }
}