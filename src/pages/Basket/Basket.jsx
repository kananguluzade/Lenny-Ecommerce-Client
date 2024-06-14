import React, { useState } from "react";
import "./Basket.scss";
import { modalContext } from "src/context/ModalProvider";
import { useContext } from "react";
import { getUserData } from "src/helper";
import { Checkbox } from "antd";
import { useSelector } from "react-redux";
import Button from "src/components/Button/Button";

const Basket = () => {
  const { setIsLogin, setIsModalOpen } = useContext(modalContext);
  const basketProducts = useSelector((state) => state.basket.products);
  const [quantity, setQuantity] = useState(1);
  const [isChecked, setIsChecked] = useState(true);
  const { jwt } = getUserData();
  const handleLogin = () => {
    setIsModalOpen(true);
    setIsLogin(true);
  };


  const handleSignUp = () => {
    setIsModalOpen(true);
    setIsLogin(false);
  };

  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div className="shopping-chart">
        <div className="heading container">
          <h5 className="shopping-chart-heading">Shopping Chart</h5>
          <p className="shopping-chart-text">Showing your choices product</p>
        </div>
        {!jwt && (
          <div className="basket-with-logout container">
            <p className="basket-signup">
              <span onClick={handleSignUp}>Sign up</span> now to add products to
              your cart or <span onClick={handleLogin}>Log in</span>
            </p>
          </div>
        )}
      </div>
      {jwt && (
        <div className="basket-wrapper container">
          <div className="basket-products">
            {basketProducts?.map((product) => (
              <div key={product.id} className="basket-product-card">
                <div className="product-info">
                  {/* <Checkbox checked={true}></Checkbox> */}
                  <input
                    type="checkbox"
                    onClick={handleChecked}
                    name=""
                    id=""
                  />
                  <img src={`http://localhost:1337${product.img}`} />
                  <div className="name-price">
                    <h6>{product.title}</h6>
                    <p>Central Jakarta</p>
                    <span>{product.price}$</span>
                  </div>
                </div>
                <div className="product-quantity">
                  <div className="product-counter">
                    <button>-</button>
                    <span>{quantity}</span>
                    <button className="plus-btn">+</button>
                  </div>
                  <button className="delete-btn">del</button>
                </div>
              </div>
            ))}
          </div>
          <div className="basket-products-price">
            <div>
              <h6>Product Summary</h6>
            </div>
            <div className="total-price">
              <h6>Total Price</h6>
              <span>$123</span>
            </div>
            <Button variant="fill" size="xl" text="Checkout" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;
