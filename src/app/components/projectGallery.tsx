import React from 'react';
import Phone from './phone';
import Desktop from './desktop';
import Info from './info';

const projectGallery = () => {
    return (
        <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-x-5 lg:gap-x-20 gap-y-10 lg:gap-y-20 mx-5 xl:mx-52">
            <div className='place-self-center lg:place-self-end order-1'>
                <Desktop image="../portfolio-site.png" />  
            </div>
            <div className="text-sm text-center lg:text-left lg:text-base text-neutral-600 dark:text-neutral-200 order-2 ">
                <Info title="Portfolio Webbapplikation" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." class="bg-zinc-700 hover:bg-zinc-800" image="../git.png" text="Projekt Repo" link="https://github.com/edvardakerman/Portfolio-NextJs" />
            </div>

            <div className='place-self-center lg:place-self-start mt-16 lg:mt-0 order-3 lg:order-4'>
                <Desktop image="../galaga.png" />
            </div>
            <div className="text-sm text-center lg:text-right lg:text-base text-neutral-600 dark:text-neutral-200 order-4 lg:order-3 ">
                <Info title="Galaga" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." class="bg-zinc-700 hover:bg-zinc-800" image="../git.png" text="Projekt Repo" link="https://github.com/edvardakerman/galaga" />
            </div>

            <div className='place-self-center lg:place-self-end mt-16 lg:mt-0 order-5 lg:order-6'>
                <Desktop image="../pb-site.png" />
            </div>
            <div className="text-sm text-center lg:text-left lg:text-base text-neutral-600 dark:text-neutral-200 order-5 lg:order-6">
                <Info title="Wordpress Webbapplikation" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." class="bg-zinc-700 hover:bg-zinc-800" image="../git.png" text="Projekt Repo" link="https://podorbets.com" />
            </div>

            <div className='place-self-center lg:place-self-start mt-16 lg:mt-0 order-7 lg:order-8'>
                <Phone image="../foodfinder.png" />
            </div>
            <div className="text-sm text-center lg:text-right lg:text-base text-neutral-600 dark:text-neutral-200 order-8 lg:order-7">
                <Info title="Resturang-App" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." class="bg-zinc-700 hover:bg-zinc-800" image="../git.png" text="Projekt Repo" link="https://github.com/edvardakerman/Restaurant-Search-App" />
            </div>

            <div className='place-self-center lg:place-self-end mt-16 lg:mt-0 order-9 lg:order-10'>
                <Desktop image="../Yahtzee-code.png" />
            </div>
            <div className="text-sm text-center lg:text-left lg:text-base text-neutral-600 dark:text-neutral-200 order-9 lg:order-10">
                <Info title="Yatzy" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." class="bg-zinc-700 hover:bg-zinc-800" image="../git.png" text="Projekt Repo" link="https://github.com/edvardakerman/Yahzee" />
            </div>
        </div>
    );
};

export default projectGallery;