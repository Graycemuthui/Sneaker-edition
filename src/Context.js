import React, { createContext, useState } from "react";

export const RoomContext = createContext();

export function RoomProvider({ children }) {
  const [counter, setCounter] = useState({});
  const [saved, setSaved] = useState([]);

  const addCart = (product) => {
    setSaved((prevState) => {
      const existingProductIndex = prevState.findIndex(
        (p) => p.id === product.id
      );

      if (existingProductIndex !== -1) {
        return [...prevState];
      } else {
        return [...prevState, { ...product, quantity: 1 }];
      }
    });
    setCounter((prevCounter) => {
      const newCounter = { ...prevCounter };
      newCounter[product.id] = 2;
      return newCounter;
    });
  };
  const removeFromArray = (objectid) => {
    setSaved((prevState) =>
      prevState.map((product) =>
        product.id === objectid
          ? { ...product, quantity: Math.max(0, product.quantity - 1) }
          : product
      )
    );

    setCounter((prevCounter) => {
      const newCounter = { ...prevCounter };
      newCounter[objectid] = Math.max(0, (newCounter[objectid] || 0) - 1);
      return newCounter;
    });
  };

  const totalPriceWithQuantity = () => {
    let totalPrice = 0;

    saved.forEach((product) => {
      const price = parseFloat(product.price);
      const quantity = counter[product.id] || 0;
      totalPrice += price * quantity;
    });

    return totalPrice;
  };

  return (
    <RoomContext.Provider
      value={{
        saved,
        addCart,
        removeFromArray,
        totalPriceWithQuantity,
        counter,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
}
