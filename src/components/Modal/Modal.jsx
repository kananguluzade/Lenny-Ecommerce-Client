import React from "react";
import { Modal as AntModal } from "antd";
import { modalContext } from "../../context/ModalProvider";
import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SignIn from "src/pages/SignIn";
import SignUp from "src/pages/SignUp";
import CompletedSignUp from "src/pages/CompletedSignUp";
import "./Modal.scss";

const Modal = () => {
  const { isModalOpen, setIsModalOpen, isLogin, setIsLogin, isRegistered } =
    useContext(modalContext);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setIsLogin(true);
  };

  return (
    <>
      {isRegistered ? <CompletedSignUp /> : null}
      <AntModal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <AnimatePresence>
          {isLogin ? (
            <motion.div
              key="signin"
              exit={{ opacity: 0, x: -100 }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <SignIn />
            </motion.div>
          ) : (
            <motion.div
              key="signup"
              exit={{ opacity: 0, x: -100 }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <SignUp />
            </motion.div>
          )}
        </AnimatePresence>
      </AntModal>
    </>
  );
};

export default Modal;
