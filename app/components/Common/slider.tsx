'use client'
import React from 'react'
import { Carousel } from 'antd';
import Image, { ImageProps } from 'next/image';

interface CarouselItem {
    title?: string;
    image?: React.ReactElement<ImageProps>;
    imageThumb?: React.ReactElement<ImageProps>;
    content?: React.ReactNode;
    primaryLabel?: string;
    primaryAction?: () => void;
    secondaryLabel?: string;
    secondaryAction?: () => void;
}

interface Responsive {
    breakpoint: number,
    settings: {
        slidesToShow: number,
        slidesToScroll: number,
        infinite?: boolean,
        dots?: boolean
    }
}

interface SliderProps {
    carouselItems: CarouselItem[];
    afterChange?: () => void;
    className?: string;
    itemClassName?: string;
    itemTitleClassName?: string;
    itemContentClassName?: string;
    itemImageThumbClassName?: string;
    slidesToShow: number;
    arrows: boolean;
    dots: boolean;
    padding: string;
    responsive?: Responsive[];
}

const Slider = ({
    carouselItems, 
    afterChange, 
    className, 
    itemClassName, 
    itemTitleClassName,
    itemContentClassName,
    itemImageThumbClassName,
    slidesToShow,
    arrows,
    dots,
    padding,
    responsive
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
                <div key={index} className={`px-[${padding}]`}>
                    <div className={`carousel-item-content w-full ${itemClassName}`}>
                        {(item.title && item.image) &&
                            <div className='carousel-image'>
                                <Image {...item.image.props} alt={item.title}/>                  
                            </div>
                        }
                        {item.imageThumb &&
                            <div className={`carousel-image-thumb ${itemImageThumbClassName}`}>
                                <Image {...item.imageThumb.props} alt={'test'}/>                  
                            </div>
                        }
                        {(item.title || item.content) &&
                            <div className='carousel-content'>
                                {item.title && <h2 className={`carousel-title ${itemTitleClassName}`}>{item.title}</h2>}
                                {item.content && <div className={`carousel-text ${itemContentClassName}`} dangerouslySetInnerHTML={{ __html: item.content}}></div>}
                            </div>
                        }
                    </div>
                </div>
            ))}
        </Carousel>
    );
}
 
export default Slider;