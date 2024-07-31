"use client";
import React from "react";
import { Carousel } from "antd";
import Image from "next/image";

interface CarouselItem {
  title?: string;
  subtitle?: string;
  image?: string;
  imageThumb?: string;
  content?: React.ReactNode;
  primaryLabel?: string;
  primaryAction?: () => void;
  secondaryLabel?: string;
  secondaryAction?: () => void;
}

interface Responsive {
  breakpoint: number;
  settings: {
    slidesToShow: number;
    slidesToScroll: number;
    infinite?: boolean;
    dots?: boolean;
  };
}

interface SliderProps {
  carouselItems: CarouselItem[];
  afterChange?: () => void;
  className?: string;
  itemClassName?: string;
  itemTitleClassName?: string;
  itemTextClassName?: string;
  itemContentClassName?: string;
  itemImageThumbClassName?: string;
  itemImageClass?: string;
  slidesToShow: number;
  arrows: boolean;
  dots: boolean;
  padding: string;
  responsive?: Responsive[];
  innerContentClass?: string;
}

const Slider = ({
  carouselItems,
  afterChange,
  className,
  itemClassName,
  itemTitleClassName,
  itemTextClassName,
  itemContentClassName,
  itemImageClass,
  itemImageThumbClassName,
  slidesToShow,
  arrows,
  dots,
  padding,
  responsive,
  innerContentClass,
}: SliderProps) => {
  return (
    <Carousel
      afterChange={afterChange}
      className={`-mx-[${padding}] ${className}`}
      slidesToShow={slidesToShow}
      arrows={arrows}
      dots={dots}
      responsive={responsive}
    >
      {carouselItems?.map((item, index) => (
        <div key={index}>
          <div className={`carousel-item-content w-full ${itemClassName}`}>
            {item.title && item.image && (
              <div
                className={`relative carousel-image${
                  itemImageClass ? " " + itemImageClass : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            {item.imageThumb && (
              <div
                className={`relative carousel-image-thumb ${itemImageThumbClassName}`}
              >
                <Image
                  src={item.imageThumb}
                  alt={"test"}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            {(item.title || item.content || item.subtitle) && (
              <div
                className={`carousel-content${
                  itemContentClassName ? " " + itemContentClassName : ""
                }`}
              >
                <div
                  className={`${innerContentClass ? innerContentClass : ""}`}
                >
                  {item.subtitle && <p>{item.subtitle}</p>}

                  {item.title && (
                    <h2 className={`carousel-title ${itemTitleClassName}`}>
                      {item.title}
                    </h2>
                  )}

                  {item.content && (
                    <div
                      className={`carousel-text ${itemTextClassName}`}
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    ></div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
