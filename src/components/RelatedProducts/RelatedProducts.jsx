import React from "react";
import Button from "src/components/Button/Button";
import PopularProdCart from "../Cart/PopularProdCart";
import './RelatedProducts.scss';

const RelatedProducts = () => {
  return (
    <div className="related-products container">
      <div className="related-products-heading">
        <h6>Related Product</h6>
        <Button text="View Detail" variant="outline" size="xxs" />
      </div>
      <div className="related-products-cards">
        <PopularProdCart />
      </div>
    </div>
  );
};

export default RelatedProducts;
