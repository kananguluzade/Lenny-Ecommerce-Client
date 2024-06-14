import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./FeaturedCategCard.scss";

const FeaturedCategCard = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_APP_STRAPI_BASE_URL
          }/api/categories?populate=*`
        );
        setCategories(data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    getCategories();
  }, []);

  return (
    <>
      {categories.map((item) => (
        <Link to={`/search-results/${item.id}`} key={item.id}>
          <div className="feat-cat-card">
            <img
              src={`${import.meta.env.VITE_APP_STRAPI_BASE_URL}${item?.attributes?.icon.data.attributes?.url
                }`}
              alt="Category Logo"
            />
            <h6>{item.attributes.name}</h6>
            <p>8,9k products</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default FeaturedCategCard;
