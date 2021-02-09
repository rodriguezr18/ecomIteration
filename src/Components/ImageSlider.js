import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider() {
  // objects are always constant
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      <div className="imgSlider">
        <img src={process.env.PUBLIC_URL + "/images/uzii.jpg"} />
      </div>

      <div className="imgSlider">
        <img src={process.env.PUBLIC_URL + "/images/lilbaby.jpg"} />
      </div>

      <div className="imgSlider">
        <img src={process.env.PUBLIC_URL + "/images/steez1.jpg"} />
      </div>

      <div className="imgSlider">
        <img src={process.env.PUBLIC_URL + "/images/joey.jpg"} />
      </div>
    </Slider>
  );
}
