import React from "react";
import ArticleCardImg from "src/assets/Rectangle 531.png";
import './ArticleCard.scss';

const ArcticleCard = () => {
  return (
    <div className="article-card">
      <div className="card-img-container">
        <img src={ArticleCardImg} />
      </div>
      <span className="card-date">22 Dec 2022</span>
      <h6 className="card-heading">Make your desk more neat and beautiful</h6>
      <p className="card-paragraph">
        Lorem ipsum dolor sit amet consectetur. Arcu pellentesque etiam
        scelerisque pharetra id. Maecenas diam eu amet cras
      </p>
    </div>
  );
};

export default ArcticleCard;
