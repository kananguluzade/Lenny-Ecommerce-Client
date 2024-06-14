import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Cascader.scss";
import { Checkbox } from "antd";
import { useNavigate } from "react-router-dom";

export const SelectFilter = () => {
  const [data, setData] = useState([]);
  const [checkedCategoryId, setCheckedCategoryId] = useState(null);
  const navigate = useNavigate();

  const handleCheckboxChange = () =>{}

  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await axios.get(
          `${
            import.meta.env.VITE_APP_STRAPI_BASE_URL
          }/api/categories?populate=*`
        );
        setData(data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    getCategories();
  }, []);

  const action = (category) => {
    navigate(`/search-results/${category.id}`);
    setCheckedCategoryId(category.id);
  };

  const handleSubChange = (subCategory) => {};

  return (
    <div className="checkbox-wrapper">
      {data.map((category) => (
        <div className="category-filter-checker" key={category.id}>
          <Checkbox
            checked={checkedCategoryId === category.id}
            onClick={() => {
              action(category);
            }}
            onChange={handleCheckboxChange}
          >
            {category?.attributes?.name}
          </Checkbox>
          <div className="sub-category-wrapper">
            {category?.attributes?.sub_categories?.data.map((subCategory) => (
              <div className="sub-category-checker" key={subCategory.id}>
                <Checkbox onClick={() => handleSubChange(subCategory)}>
                  {subCategory?.attributes?.name}
                </Checkbox>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
