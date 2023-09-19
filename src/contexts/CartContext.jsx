/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { fetchProduct } from "../utils/productsStore";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  const getProductQuantity = (id) => {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) return 0;

    return quantity;
  };

  const addOneToCart = (id) => {
    const quantity = getProductQuantity(id);

    if (quantity === 0)
      setCartProducts((prevCart) => [...prevCart, { id: id, quantity: 1 }]);
    else {
      setCartProducts((prevCart) =>
        prevCart.map((product) =>
          product.id === id
            ? { ...product, quantity: ++product.quantity }
            : product
        )
      );
    }
  };

  const deleteFromCart = (id) => {
    setCartProducts((prevCart) =>
      prevCart.filter((product) => product.id !== id)
    );
  };

  const removeOneFromCart = (id) => {
    const quantity = getProductQuantity(id);

    if (quantity == 1) deleteFromCart(id);
    else
      setCartProducts((prevCart) =>
        prevCart.map((product) =>
          product.id === id
            ? { ...product, quantity: --product.quantity }
            : product
        )
      );
    };
    
    const getTotalCost = async () => {
        await cartProducts.reduce(async (prevPromise, product) => {
            let totalCost = prevPromise;
            const productDetails = await fetchProduct(product.id);
            totalCost += productDetails.price;

            return totalCost;
        }, Promise.resolve([]))
    }

  const contextValue = {
    items: [],
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
