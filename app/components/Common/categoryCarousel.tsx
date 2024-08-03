"use client";
import React from "react";
import { Carousel } from "antd";
import CategoryItem from "./categoryItem";

interface CategoryCarouselProps {
  data: any;
}

const CategoryCarousel = ({ data }: CategoryCarouselProps) => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <div>
      <div className="container">
        <Carousel
          afterChange={onChange}
          slidesToShow={5}
          slidesToScroll={1}
          responsive={[
            { breakpoint: 1920, settings: { slidesToShow: 4 } },
            { breakpoint: 1200, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
          ]}
        >
          {data?.map((item: any, index: number) => (
            <div key={index}>
              <CategoryItem category={item} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CategoryCarousel;
