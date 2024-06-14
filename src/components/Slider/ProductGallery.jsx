import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './ProductGallery.scss';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const ProductGallery = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const firstElementRef = useRef(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {product[0]?.attributes?.images?.data?.map((image) => (
          <SwiperSlide key={image.id}>
            <img className="swiper-slide-img" src={`http://localhost:1337${image?.attributes?.url}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onClick={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {product[0]?.attributes?.images?.data?.map((image) => (
          <SwiperSlide key={image.id}>
            <img className="prod-slider-thumbnail" src={`http://localhost:1337${image?.attributes?.url}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductGallery;
