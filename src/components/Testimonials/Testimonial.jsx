import React from "react";
import Slider form "react-slick";

const TestimoialsData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, iure nostrum. Id nemo, maxime alias, reiciendis unde fugit odit dolores sequi similique provident itaque distinctio. Inventore nemo ratione voluptatum aut?",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 1,
    name: "John",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, iure nostrum. Id nemo, maxime alias, reiciendis unde fugit odit dolores sequi similique provident itaque distinctio. Inventore nemo ratione voluptatum aut?",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Marco",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, iure nostrum. Id nemo, maxime alias, reiciendis unde fugit odit dolores sequi similique provident itaque distinctio. Inventore nemo ratione voluptatum aut?",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "Angela",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, iure nostrum. Id nemo, maxime alias, reiciendis unde fugit odit dolores sequi similique provident itaque distinctio. Inventore nemo ratione voluptatum aut?",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Bosch",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, iure nostrum. Id nemo, maxime alias, reiciendis unde fugit odit dolores sequi similique provident itaque distinctio. Inventore nemo ratione voluptatum aut?",
    img: "https://picsum.photos/105/105",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    Infinite: true,
    speed: 500,
    slideToscroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive:[
      {
        breakpoints: 10000,
        settings:{
          slideToShow: 3,
          slideToscroll: 1,
          Infinite: true,
        },
      },
      {
         breakpoints: 1024,
        settings:{
          slideToShow: 2,
          slideToscroll: 1,
          initialSlider: true,
        }, 
      },
      {
         breakpoints: 640,
        settings:{
          slideToShow: 1,
          slideToscroll: 1,
        }, 
      },
    ]
  }

  return (
    <div className="py-10 mb-10">
    <div className="container">
      <div className="text-center mb-10 max-w-[600px] mx-auto">
        p
      </div>
    </div>
    </div>
  );
};

export default Testimonial;
