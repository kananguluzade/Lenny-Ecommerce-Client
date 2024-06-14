import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { modalContext } from "src/context/ModalProvider.jsx";

const useBasket = () => {
  const { setBasketProducts, basketProducts } = useContext(modalContext);
  useEffect(() => {
    axios
      .post("http://localhost:1337/api/basket", {
        data: {
          basketProducts,
        },
      })
      .then((response) => {
        console.log(response);
      });
  },[basketProducts]);
  // const addToBasket = async () => {
  //   axios.post();
  //   try {
  //     setBasket([...basket]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // return { basket, addToBasket };
};

export default useBasket;
