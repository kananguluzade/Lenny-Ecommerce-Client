import React from "react";
import { Modal as AntModal } from "antd";
import MYButton from "src/components/Button/Button";
import { modalContext } from "src/context/ModalProvider";
import { useContext } from "react";
import "../components/Modal/Modal.scss";

const CompletedSignUp = () => {
  const {
    setIsRegistered,
    setIsRegisteredOpen,
    isRegisteredOpen,
    setIsLogin,
    setIsModalOpen,
  } = useContext(modalContext);

  const handleOk = () => {
    setIsRegistered(false);
    setIsRegisteredOpen(false);
    setIsLogin(true);
  };

  const handleCancel = () => {
    setIsRegisteredOpen(false);
    setIsRegistered(false);
    setIsLogin(true);
  };

  const action = () => {
    setIsLogin(true);
    setIsRegistered(false);
    setIsRegisteredOpen(false);
    setIsModalOpen(true);
  };

  return (
    <AntModal open={isRegisteredOpen} onOk={handleOk} onCancel={handleCancel}>
      <div className="completed-register">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.1"
            d="M60.0005 110C87.6147 110 110 87.6142 110 60C110 32.3858 87.6147 10 60.0005 10C32.3863 10 10.0005 32.3858 10.0005 60C10.0005 87.6142 32.3863 110 60.0005 110Z"
            fill="#1D9E34"
          />
          <path
            d="M52.9 77.9C51.9 77.9 50.95 77.5 50.25 76.8L36.1 62.65C34.65 61.2 34.65 58.8 36.1 57.35C37.55 55.9 39.95 55.9 41.4 57.35L52.9 68.85L78.6 43.15C80.05 41.7 82.45 41.7 83.9 43.15C85.35 44.6 85.35 47 83.9 48.45L55.55 76.8C54.85 77.5 53.9 77.9 52.9 77.9Z"
            fill="#1D9E34"
          />
        </svg>
        <h5>Create Account Successfull!</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur. Velit ut ipsum tortor diam nec
          blandit ultrices et magna nisl eu.
        </p>
        <MYButton action={action} text="Sign In" variant="fill" size="xl" />
      </div>
    </AntModal>
  );
};

export default CompletedSignUp;
