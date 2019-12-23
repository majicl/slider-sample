import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

export function Sliders() {
  const slides = [
    {
      title: "First item",
      description: "Lorem ipsum",
      img:
        "https://dkstatics-public.digikala.com/digikala-products/2946332.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
    },
    {
      title: "Second item",
      description: "Lorem ipsum",
      img:
        "https://dkstatics-public.digikala.com/digikala-products/4767944.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
    },
    {
      title: "diaper",
      description: "diaper",
      img:
        "https://dkstatics-public.digikala.com/digikala-products/113718989.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
    }
  ];

  return (
    <Slider>
      {slides.map((slide, index) => (
        <div key={index}>
          <h2>{slide.title}</h2>
          <div>{slide.description}</div>
          <img src={slide.img}></img>
        </div>
      ))}
    </Slider>
  );
}
