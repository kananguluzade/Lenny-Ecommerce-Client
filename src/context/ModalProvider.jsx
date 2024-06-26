import React, { createContext, useState } from "react";

export const modalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegisteredOpen, setIsRegisteredOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
  const [handleUrl, setHandleUrl] = useState("");
  const [basketProducts, setBasketProducts] = useState([]);
  const [errors, setErrors] = useState({});

  const globalState = {
    isModalOpen,
    setIsModalOpen,
    isRegisteredOpen,
    setIsRegisteredOpen,
    isLogin,
    setIsLogin,
    isRegistered,
    setIsRegistered,
    isActive,
    setIsActive,
    filteredItems,
    setFilteredItems,
    handleUrl,
    setHandleUrl,
    basketProducts,
    setBasketProducts,
    errors,
    setErrors,
  };

  return (
    <modalContext.Provider value={globalState}>
      {children}
    </modalContext.Provider>
  );
};

export default ModalProvider;
