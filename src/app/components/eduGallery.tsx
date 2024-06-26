import React from 'react';
import Info from './info';

const eduGallery = () => {
    return (
        <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-x-10 lg:gap-x-20 gap-y-10 lg:gap-y-28 mx-5 xl:mx-52">

            <div className='place-self-center lg:place-self-center order-1'>
                <img src='../LiU_primary_black.png' ></img>
            </div>
            <div className="text-sm text-center lg:text-left lg:text-base text-neutral-600 dark:text-neutral-200 order-2 ">
                <Info title="Systemvetenskap" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." class="bg-sky-600 hover:bg-sky-700" text="Systemvetenskap på LiU" link="https://liu.se/utbildning/program/f7ksy"/>
            </div>

            <div className='place-self-center lg:place-self-center mt-16 lg:mt-0 order-3 lg:order-4'>
                <img src='../Nackademin.png' ></img>
            </div>
            <div className="text-lg text-center lg:text-right lg:text-base text-neutral-600 dark:text-neutral-200 order-4 lg:order-3 ">
                <Info title="Webbutvecklare Fullstack Open Source" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." class="bg-zinc-700 hover:bg-zinc-800" text="Fullstack på Nackademin" link="https://nackademin.se/utbildningar/webbutvecklare-fullstack-open-source/" />
            </div>

            <div className='place-self-center lg:place-self-end order-5 mt-16 lg:mt-0 lg:order-6'>
                <img src='../Averett_stacked_logo.png' ></img>
            </div>
            <div className="text-lg text-center lg:text-left lg:text-base text-neutral-600 dark:text-neutral-200 order-5 lg:order-6">
                <Info title="Averett University" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." class="bg-blue-900 hover:bg-blue-950" text="Averett University" link="https://www.averett.edu" />
            </div>
        </div>
    );
};

export default eduGallery;