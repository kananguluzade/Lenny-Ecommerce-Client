import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import ArcticleCard from "../../components/ArticleCard/ArcticleCard";
import PopularProdCart from "../../components/Cart/PopularProdCart";
import FeaturedCategCard from "../../components/FeaturedCategoryCard/FeaturedCategCard";
import HeroImage from "src/assets/image4.png";
import CardsArrow from "src/assets/Frame 46.png";
import CardsWay from "src/assets/Frame 48.png";
import advertProduct from "src/assets/iPad Air 2020.png";
import { useNavigate } from "react-router-dom";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.scss";
const Home = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [products, setProducts] = useState([]);
  const [showProducts, setShowProducts] = useState(8);
  const navigate = useNavigate();


  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_APP_STRAPI_BASE_URL}/api/products?filters[solds][$gt]=1000&pagination[page]=1&pagination[pageSize]=${showProducts}&populate=*`
        );
        setProducts(data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, [showProducts]);

  const toggleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    !isFavorite ? setIsFavorite(true) : setIsFavorite(false);
  };

  const action = () => {
    navigate("search-results")
  }

  const showMore = () => {
    setShowProducts(showProducts + 4);
  }

  return (
    <>
      <div className="home-page-container">
        <div className="carousel">
          <Carousel className="container" autoplay>
            <div className="carousel-page-container">
              <div className="background-image-container">
                <div className="helper-left"></div>
                <div
                  className="hero-image"
                  style={{
                    backgroundImage: `url(${HeroImage})`,
                  }}
                >
                  <img className="hero-cards-arrow" src={CardsArrow} />
                  <img className="hero-cards-way" src={CardsWay} />
                  {products.filter((product) => product?.attributes?.name === "Green Man Jacket").map((product) => (
                    <Link to={`/product-detail/${product.id}`} key={product.id}>
                      <PopularProdCart
                        product={product}
                        isFavorite={isFavorite}
                        toggleClick={toggleClick}
                        key={product.id}
                      />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hero-content">
                <div className="left-hero-container">
                  <h1>Upgrade Your Wardrobe With Our Collection</h1>
                  <p>
                    Eget neque aenean viverra aliquam tortor diam nunc. Dis
                    pellentesque lectus quis velit fusce aenean nunc dui
                    consectetur. Eu lorem est ullamcorper nisl amet non mollis.
                  </p>
                  <div className="hero-buttons">
                    <Button
                      text="Buy Now"
                      variant="fill"
                      className="full-btn"
                    />
                    <Button
                      action={action}
                      text="View Detail"
                      variant="outline"
                      className="full-btn"
                    />
                  </div>
                </div>
                <div className="right-hero-container"></div>
              </div>
            </div>
            <div className="carousel-page-container">
              <div className="background-image-container">
                <div className="helper-left"></div>
                <div
                  className="hero-image"
                  style={{
                    backgroundImage: `url(${HeroImage})`,
                  }}
                >
                  <img className="hero-cards-arrow" src={CardsArrow} />
                  <img className="hero-cards-way" src={CardsWay} />
                  {products.filter((product) => product?.attributes?.name === "Green Man Jacket").map((product) => (
                    <Link to={`/product-detail/${product.id}`} key={product.id}>
                      <PopularProdCart
                        product={product}
                        isFavorite={isFavorite}
                        toggleClick={toggleClick}
                        key={product.id}
                      />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hero-content">
                <div className="left-hero-container">
                  <h1>Upgrade Your Wardrobe With Our Collection</h1>
                  <p>
                    Eget neque aenean viverra aliquam tortor diam nunc. Dis
                    pellentesque lectus quis velit fusce aenean nunc dui
                    consectetur. Eu lorem est ullamcorper nisl amet non mollis.
                  </p>
                  <div className="hero-buttons">
                    <Button
                      text="Buy Now"
                      variant="fill"
                      className="normal-btn"
                    />
                    <Button
                      text="View Detail"
                      variant="outline"
                      className="normal-btn"
                    />
                  </div>
                </div>
                <div className="right-hero-container"></div>
              </div>
            </div>
          </Carousel>
        </div>
        <div className="featured-category container">
          <div className="category-cards-heading">
            <h2>Featured Category</h2>
            <Button
              action={action}
              text="View Detail"
              variant="outline"
              size="sm"
              className="sm-btn"
            />
          </div>
          <div className="categories-cards">
            <FeaturedCategCard />
          </div>
        </div>
        <div className="pop-products container">
          <h2 className="pop-products-heading">Popular Product on Lenny</h2>
          <p className="pop-products-paragraph">
            Lorem ipsum dolor sit amet consectetur. Integer cursus cursus in
          </p>


          <div className="pop-products-cards">
            {products.map((product) => (
              <Link to={`/product-detail/${product.id}`} key={product.id}>
                <PopularProdCart product={product} isFavorite={isFavorite} toggleClick={toggleClick} />
              </Link>
            ))}
          </div>
          <div className="load-more-product">
            {showProducts < 12 && <Button
              action={showMore}
              text="Load More"
              variant="outline"
              className="normal-btn"
            />}
          </div>
        </div>
        <div className="advertising-product container">
          <img src={advertProduct} />
          <div className="adverting-product-rigth-container">
            <h2 className="product-name">Ipad Air Gen 5</h2>
            <p className="product-info">
              Lorem ipsum dolor sit amet consectetur. Integer cursus cursus in
              sapien quam risus sed diam.
            </p>
            <div className="button-box">
              <Button text="Buy $900" variant="fill" className="full-btn" />
              <Button
                text="View Detail"
                variant="outline"
                className="full-btn"
              />
            </div>
          </div>
        </div>
        <div className="lennys-article container">
          <div className="article-heading">
            <h2>Lenny’s Article</h2>
            <Button
              text="View Detail"
              variant="outline"
              size="sm"
              className="sm-btn"
            />
          </div>
          <div className="article-cards-container">
            <ArcticleCard />
            <ArcticleCard />
            <ArcticleCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
