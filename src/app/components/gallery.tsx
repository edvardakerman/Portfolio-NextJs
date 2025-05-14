import React from 'react';
import Phone from './phone';
import Desktop from './desktop';
import Info from './info';
import Button from './button';
import { GalleryItem } from '../models/galleryItem';
import StarRating from './StarRating';

type Props = {
    galleryItems: GalleryItem[];
}

const visualElement = (galleryItem: GalleryItem) => {
    switch (galleryItem.type) {
        case "phone":
            return <Phone image={galleryItem.image} />;
        case "desktop":
            return <Desktop image={galleryItem.image} />;
        case "image":
            return <img src={galleryItem.image} ></img>
        default:
            return <img src={galleryItem.image} ></img>
    }
}

const isOdd = (n: number) => n % 2 !== 0 ? true : false;

const gallery = ({ galleryItems }: Props) => {
    return (
        <div className="flex flex-col items-center gap-y-24 lg:gap-y-28 lg:mx-20">
            {galleryItems.map((galleryItem, index) => (
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16" key={index}>
                    <div className={`${isOdd(index + 1) ? "lg:justify-end order-1" : "lg:order-2 lg:justify-start order-1"} flex justify-center m-auto order-1 lg:w-1/2`}>
                        {visualElement(galleryItem)}
                    </div>
                    <div className={`${isOdd(index + 1) ? "order-2 lg:text-left" : "lg:order-1 order-2 lg:text-right"} flex lg:w-1/2 m-auto flex-col text-sm text-center text-neutral-600 dark:text-neutral-200`}>
                        <Info title={galleryItem.title} desc={galleryItem.desc} tags={galleryItem.tags} />

                        {galleryItem.extraBtn &&
                            <div className='my-2'>
                                <Button color={galleryItem.extraBtn.class} text={galleryItem.extraBtn.text} link={galleryItem.extraBtn.link} />
                            </div>
                        }

                        {galleryItem.rating &&
                            <div className='my-2'>
                                <StarRating filledStars={galleryItem.rating.score} />
                            </div>
                        }
                    </div>
                </div>
            ))}
        </div>
    );
};

export default gallery;