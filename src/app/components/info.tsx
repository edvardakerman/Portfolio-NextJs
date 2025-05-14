import React from 'react';
import Button from './button';
import { ItemTags } from '../models/galleryItem';

type Props = {
    /** color to use for the background */
    image?: string;
    text?: string;
    class?: string;
    link?: string;
    title?: string;
    desc?: string;
    tags?: ItemTags[];
}

const info = (props: Props) => {
    return (
        <div>
            <h1 className='text-xl text-shadow-lg shadow-neutral-950/40'>{props.title}</h1>
            <div className='my-2'>
                {props.tags?.map((tag, index) => (
                    <span key={index} className={`${tag?.color} text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm`}>{tag?.text}</span>
                ))}
            </div>
            <p className='mb-5 text-shadow-lg shadow-neutral-950/40'>
                {props.desc}
            </p>
        </div>
    );
};

export default info;