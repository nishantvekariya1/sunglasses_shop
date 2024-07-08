import React, { createContext, useContext, useReducer } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          product: action.product,
          catagory: action.catagory,
          price: action.price,
          provider: action.provider,
          url: action.url,
          qty: action.qty,
        },
      ];

    case "REMOVE":
      let newArr = [...state];
      newArr.splice(action.index, 1);
      return newArr;

    case "UPDATE":
      let arr = [...state];
      arr.find((product, index) => {
        if (product.id === action.id) {
          console.log(
            product.qty,
            parseInt(action.qty),
            action.price + product.price
          );
          arr[index] = {
            ...product,
            qty: parseInt(action.qty) + product.qty,
            price: action.price + product.price,
          };
        }
        return arr;
      });
      return arr;

    case "DROP":
      let empArray = [];
      return empArray;

    default:
      console.log("Error in Reducer");
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
