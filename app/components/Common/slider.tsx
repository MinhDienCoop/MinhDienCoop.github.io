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

interface SliderProps {
    carouselItems: CarouselItem[];
    afterChange?: () => void;
    className?: string;
    itemClassName?: string;
    slidesToShow: number;
    itemTitleClassName?: string;
    itemContentClassName?: string;
    itemImageThumbClassName?: string;
}

const Slider = ({
    carouselItems, 
    afterChange, 
    className, 
    itemClassName, 
    slidesToShow,
    itemTitleClassName,
    itemContentClassName,
    itemImageThumbClassName
}: SliderProps) => {
    return (
        <Carousel afterChange={afterChange} className={className&&className} slidesToShow={slidesToShow}>
            {carouselItems?.map((item, index) => (
                <div key={index}>
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