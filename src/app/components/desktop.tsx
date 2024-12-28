import React from 'react';

type Props = {
    /** color to use for the background */
    image?: string;
}

const desktop = (props: Props) => {
    return (
        <div className=''>
            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                <div className="rounded-xl overflow-hidden h-[140px] md:h-[262px]">
                    <img src={props.image} alt='desktop' className="h-[140px] md:h-[262px] w-full" />
                </div>
            </div>
            <div className="relative mx-auto bg-gray-900 shadow-xl dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]"></div>
            <div className="relative mx-auto bg-gray-800 shadow-xl rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]"></div>
        </div>
    );
};

export default desktop;