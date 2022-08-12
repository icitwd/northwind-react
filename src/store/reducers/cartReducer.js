import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
  cartItems: cartItems,
};

export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
      let product = state.cartItems.find((c) => c.product.id === payload.id);

      if (product) {
        product.quantity++;
        return {
          ...state,
        };
      } else {
        return {
          ...state, //bunun olma sebebi, bazı elemanları korumak istiyor isek. bu örnekte tek eleman var o yüzden gerek yoktu.
          cartItems: [...state.cartItems, { quantity: 1, product: payload }],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (c) => c.id !== payload.id // eşleşenlerle yeni bir array oluştur
        ),
      };

    default:
      return state;
  }
}
