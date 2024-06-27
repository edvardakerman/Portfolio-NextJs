import React from 'react';
import Button from './button';

type Props = {
    /** color to use for the background */
    image?: string;
    text?: string;
    class?: string;
    link?: string;
    title?: string;
    desc?: string;
}

const info = (props: Props) => {
    return (
        <div>
            <h1 className='text-xl mb-5'>{props.title}</h1>
            <p className='mb-5'>
                {props.desc}
            </p>
            <Button color={props.class} icon={props.image} text={props.text} link={props.link} />
        </div>
    );
};

export default info;