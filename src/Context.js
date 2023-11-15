import React, { createContext, useState } from "react";
export const RoomContext = createContext();

export function RoomProvider({ children }) {
  const [counter, setCounter] = useState(0);
  const [saved, setSaved] = useState([]);

  const addCart = (product) => {
    setSaved((prevCart) => [...prevCart, product]);
    setCounter((prevCounter) => ({
      ...prevCounter,
      [product.id]: (prevCounter[product.id] || 0) + 1,
    }));
  };

  const removeFromArray = (objectid) => {
    setSaved((prevState) =>
      prevState.filter((product) => product.id !== objectid)
    );
    setCounter((prevCounter) => {
      const newCounter = { ...prevCounter };
      delete newCounter[objectid];
      return newCounter;
    });
  };

  const totalPriceWithQuantity = (product) => {
    let totalPrice = 0;

    console.log("Counter state:", counter);

    if (product.id && product.price && !isNaN(product.price)) {
      const price = parseFloat(product.price);
      if (!isNaN(price)) {
        totalPrice += price * (counter[product.id] || 0);
      } else {
        console.log("Invalid price (NaN) for product:", product);
      }
    } else {
      console.log("Invalid or missing id/price for product:", product);
    }
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
export const RoomConsumer = RoomContext.Consumer;
