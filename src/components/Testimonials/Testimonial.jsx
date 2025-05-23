import React from "react";
import Slider from "react-slick";

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
    responsive: [
      {
        breakpoints: 10000,
        settings: {
          slideToShow: 3,
          slideToscroll: 1,
          Infinite: true,
        },
      },
      {
        breakpoints: 1024,
        settings: {
          slideToShow: 2,
          slideToscroll: 1,
          initialSlider: true,
        },
      },
      {
        breakpoints: 640,
        settings: {
          slideToShow: 1,
          slideToscroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What Out Customers Are Saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimoinals
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            culpa asperiores soluta voluptatum omnis vel esse similique corporis
            inventore laudantium porro doloribus nemo officia quisquam deserunt
            quaerat enim error, placeat atque odit.
          </p>
        </div>
        <div data-aos="fade-up">
          <Slider {...settings}>
            {TestimoialsData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-600 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-sm dark:text-slate-300 text-gray-500">
                        {data.text}
                      </p>
                      <h1 className="text-xl font-bold dark:text-slate-300 text-black/80 dark:text-light">{data.name}</h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0"></p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
