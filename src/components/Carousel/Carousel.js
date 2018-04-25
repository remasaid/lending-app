import React, { Component } from "react";
import "./Carousel.css";
import "./slick-carousel.css";
import "./slick-carousel-theme.css";

//IMAGES
import Slider1 from "../../img/slider_1.png";

//EXTERNAL COMPONENTS
// import Carousel from "nuka-carousel";
import Slider from "react-slick";

export default class Carousel extends Component {
  render() {
    let carouselItems;
    carouselItems = [
      {
        img: Slider1,
        header: "Mortgage promo headline",
        text:
          "Lorem ipsum dolor sit amet, lacus eget elit luctus, hendrerit consectetuer diam eros adipiscing, orci sed malesuada magnis id vel libero. Est justo ante sed scelerisque quis in. "
      },
      {
        img: Slider1,
        header: "Let us take your money!",
        text:
          "Lorem ipsum dolor sit amet, lacus eget elit luctus, hendrerit consectetuer diam eros adipiscing, orci sed malesuada magnis id vel libero. Est justo ante sed scelerisque quis in. "
      },
      {
        img: Slider1,
        header: "Only 33% fixed interest rate!",
        text:
          "Lorem ipsum dolor sit amet, lacus eget elit luctus, hendrerit consectetuer diam eros adipiscing, orci sed malesuada magnis id vel libero. Est justo ante sed scelerisque quis in. "
      },
      {
        img: Slider1,
        header: "Muahahahah!",
        text:
          "Lorem ipsum dolor sit amet, lacus eget elit luctus, hendrerit consectetuer diam eros adipiscing, orci sed malesuada magnis id vel libero. Est justo ante sed scelerisque quis in. "
      }
    ];

    let carouselJsx = carouselItems.map((item, index) => {
      return (
        <div className="carousel-item-container">
          <img className="carousel-item-img" src={item.img} />
          <div className="image-overlay" />
          <div className="carousel-item-details">
            <h1 className="carousel-item-header">{item.header}</h1>
            <p className="carousel-item-text">{item.text}</p>
          </div>
        </div>
      );
    });

    // let carouselJsx = <img src={Slider1} />;

    // let sliderImage = false;
    // sliderImage = (
    //   <img src="https://timedotcom.files.wordpress.com/2017/12/barack-obama.jpeg" />
    // );

    // if (sliderImage) {
    //   console.log(sliderImage);

    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className="slider-container">
        <Slider {...settings}>{carouselJsx}</Slider>
      </div>
    );
  }
}
