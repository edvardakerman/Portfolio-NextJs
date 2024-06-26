import React from 'react';

type Props = {
    /** color to use for the background */
    text?: string;
    link?: string;
    color?: string;
    icon?: string;
}

const Button = (props: Props) => {
    return (
        <a href={props.link} target="_blank" rel="noreferrer" type="button" className={`text-white ${props.color} shadow-xl focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center`}>
        {
            props.icon !== undefined && <img className='mr-2 place-self-center' width="17px" height="17" src={props.icon} alt="" />
        }
        {props.text}
    </a>
    );
};

export default Button;