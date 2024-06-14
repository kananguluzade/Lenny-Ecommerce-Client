import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Breadcrumb } from "antd";
import star from "src/assets/star.png";
import Button from "../../components/Button/Button";
import ProductGallery from "../../components/Slider/ProductGallery";
import Tabs from "../../components/Tabs/Tabs";
import "./ProductDetails.scss";
import { Comments } from "src/components/Comments/Comments";
import { useParams } from "react-router-dom";
import Progress from "src/components/Progress/Progress";
import { useDispatch } from "react-redux";
import { addToBasket } from "src/redux/reducers/basketReducer";

const ProductDetail = () => {
  const id = useParams().id;
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const {
          data: { data },
        } = await axios.get(
          `${
            import.meta.env.VITE_APP_STRAPI_BASE_URL
          }/api/products?populate=*&filters[id][$in][0]=${id}`
        );
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (id) {
      fetchCategories();
    }
    scrollToTop();
  }, [id]);

  return (
    <div>
      <div className="bread-crumb container">
        <Breadcrumb
          separator=">"
          items={[
            {
              title: "Home",
              href: "/",
            },
            {
              title: `${product[0]?.attributes?.categories?.data[0]?.attributes?.name}`,
              href: "",
            },
            {
              title: `${product[0]?.attributes?.sub_categories?.data[0]?.attributes?.name}`,
              href: "",
            },
            {
              title: `${product[0]?.attributes?.name}`,
            },
          ]}
        />
      </div>
      <div className="product-main-details  container">
        <div className="product-gallery">
          <ProductGallery product={product} />
        </div>
        <div className="product-name">
          <h2>{product[0]?.attributes?.name}</h2>
          <div className="stars-solds">
            <img src={star} />
            <p className="star-point">4,8</p>
            <p className="solds">1,238 Sold</p>
          </div>
          <h4 className="product-price">{product[0]?.attributes?.price}$</h4>
          <p className="product-description">
            G502 X LIGHTSPEED is the latest addition to legendary G502 lineage.
            Featuring our first-ever LIGHTFORCE hybrid optical-mechanical
            switches and updated LIGHTSPEED wireless protocol with 68% faster
            response rate.
          </p>
          <h2 className="variant-heading">Product Variant:</h2>
          <div className="variant-flex">
            <div className="variant-type">
              <p>Type</p>
              <select>
                <option>Wireless</option>
              </select>
            </div>
            <div className="variant-color">
              <p>Color</p>
              <select>
                <option>Black</option>
              </select>
            </div>
          </div>
          <div className="button-box">
            <Button text="Buy Now" variant="fill" size="lg" />
            <Button
              action={() =>
                dispatch(
                  addToBasket({
                    id: product[0].id,
                    title: product[0].attributes.name,
                    price: product[0].attributes.price,
                    img: product[0].attributes.thumbnail.data.attributes.url,
                  })
                )
              }
              text="Add to Chart"
              variant="outline"
              size="lg"
            />
          </div>
        </div>
      </div>
      <div className="tab-lists container">
        <Tabs />
      </div>
      <div className="container">
        <Progress />
        <Comments />
      </div>
    </div>
  );
};

export default ProductDetail;
