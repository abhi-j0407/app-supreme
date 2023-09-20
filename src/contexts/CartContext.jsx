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
            ? { ...product, quantity: product.quantity + 1 }
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
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
  };

  const getTotalCost = async () => {

    const productPromises = cartProducts.map(async (product) => {
      const productData = await fetchProduct(product.id);
      return productData.price * product.quantity;
    });

    const prices = await Promise.all(productPromises);
    const total = prices.reduce((sum, price) => sum + price, 0);

    return total;
  };

  const contextValue = {
    items: cartProducts,
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
