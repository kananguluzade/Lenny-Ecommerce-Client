import React, { useContext, useEffect, useState, useRef } from "react";
import Modal from "../Modal/Modal";
import { modalContext } from "../../context/ModalProvider";
import logoImage from "src/assets/Logo.png";
import searchIcon from "src/assets/search-normal.png";
import basketIcon from "src/assets/shopping-cart.png";
import profileIcon from "src/assets/Frame3.png";
import notificationIcon from "src/assets/notification.png";
import smsIcon from "src/assets/sms.png";
import { Link } from "react-router-dom";
import { getUserData } from "src/helper";
import axios from "axios";
import "./Header.scss";
import Profile from "../ProfileInfo/Profile";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const { setIsModalOpen, isActive, setIsActive, setFilteredItems, handleUrl } =
    useContext(modalContext);
  const { jwt } = getUserData();
  const [categories, setCategories] = useState([]);
  const [inputChange, setInputChange] = useState("");
  const btnRef = useRef();
  const handleRef = useRef();
  const basketProducts = useSelector((state) => state.basket.products);


  useEffect(() => {
    if (handleUrl) {
      setInputChange(handleUrl);
    }
  }, [handleUrl]);

  useEffect(() => {
    if (inputChange) {
      const getProducts = async () => {
        try {
          const { data } = await axios.get(
            `${
              import.meta.env.VITE_APP_STRAPI_BASE_URL
            }/api/products?filters[name][$containsi]=${inputChange}&populate=*`
          );
          setFilteredItems(data.data);
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      };
      getProducts();
    }
  }, [inputChange]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await axios.get(
          `${
            import.meta.env.VITE_APP_STRAPI_BASE_URL
          }/api/categories?populate=*`
        );
        setCategories(data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    getCategories();
  }, []);

  const handleCategory = (category) => {
    navigate(`/search-results/${category}`);
  };
  const toggleClassName = () => {
    setIsActive(!isActive);
  };

  const getBasket = () => {
    navigate("/lenny-basket");
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (handleRef.current.value !== "") {
      setInputChange(handleRef.current.value);
      navigate(`/filter-results/${handleRef.current.value}`);
    }
  };

  return (
    <div className="big-container">
      <div className="header-container container">
        <div className="h-logo">
          <Link to="/">
            <img src={logoImage} />
          </Link>
        </div>
        <div className="search-box">
          <select className="search-sort">
            <option value="default">All Categories</option>
            {categories.map((category) => (
              <option
                key={category.id}
                value={category.attributes.name}
                onChange={() => () => {
                  handleCategory(category);
                }}
              >
                {category.attributes.name}
              </option>
            ))}
          </select>
          <form onSubmit={handleChange}>
            <input
              className="search-text"
              type="text"
              placeholder="Search on lenny..."
              ref={handleRef}
            />
          </form>
          <button className="search-logo">
            <img src={searchIcon} />
          </button>
        </div>
        <div className="pp-basket">
          <button className="h-basket" onClick={getBasket}>
            <img src={basketIcon} />
            <div>
              <span>{basketProducts.length}</span>
            </div>
          </button>
          {jwt && (
            <div className="notification-icons">
              <button>
                <img src={notificationIcon} />
              </button>
              <button>
                <img src={smsIcon} />
              </button>
            </div>
          )}
          <Modal />
          <Profile />
          <button className="h-profile">
            <img
              src={profileIcon}
              ref={btnRef}
              onClick={() => {
                !jwt ? setIsModalOpen(true) : toggleClassName();
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
