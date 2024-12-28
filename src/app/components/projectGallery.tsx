import React from 'react';
import Phone from './phone';
import Desktop from './desktop';
import Info from './info';
import Button from './button';

const projectGallery = () => {
    return (
        <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-x-5 lg:gap-x-20 gap-y-10 lg:gap-y-20 mx-5 xl:mx-52">

            {/* Mam */}
            <div className='place-self-center lg:place-self-end order-1'>
                <Desktop image="../mam.png" />
            </div>
            <div className="text-sm text-center lg:text-left lg:text-base text-neutral-600 dark:text-neutral-200 order-2 ">
                <Info title="MyAwesomeMovies.com 🍿" desc="The Watchlist project is a Next.js web application where users can sign up to explore movies and track them in personalized watchlists. It allows users to easily manage and organize films they plan to watch or have already seen." class="bg-zinc-700 hover:bg-zinc-800" image="../git.png" text="Projekt Repo" link="https://github.com/edvardakerman/Portfolio-NextJs" />
                <div className='my-2'>
                    <Button color="bg-red-700 hover:bg-red-900" text="MyAwesomeMovies.com" link="https://myawesomemovies.com" />
                </div>
            </div>

            {/* Karallen */}
            <div className='place-self-center lg:place-self-start mt-16 lg:mt-0 order-3 lg:order-4'>
                <Desktop image="../karallen.png" />
            </div>
            <div className="text-sm text-center lg:text-right lg:text-base text-neutral-600 dark:text-neutral-200 order-4 lg:order-3 ">
                <Info title="Karallen 🪩" desc="Karallen is an object-oriented Java game built with JavaFX. In this game the player controls a character who tries to catch all the items while also avoiding the bouncer, offering intuitive controls and engaging gameplay." class="bg-zinc-700 hover:bg-zinc-800" image="../git.png" text="Projekt Repo" link="https://github.com/edvardakerman/Karallen" />
            </div>

            {/* Portfolio */}
            <div className='place-self-center lg:place-self-end mt-16 lg:mt-0 order-5 lg:order-6'>
                <Desktop image="../portfolio.png" />
            </div>
            <div className="text-sm text-center lg:text-left lg:text-base text-neutral-600 dark:text-neutral-200 order-5 lg:order-6">
                <Info title="edvardakerman.com 🧑‍💻" desc="This portfolio website is built with Next.js and TypeScript, showcasing my work, skills, and projects. It provides an interactive and responsive experience, highlighting my expertise in web development and systems science." class="bg-zinc-700 hover:bg-zinc-800" image="../git.png" text="Projekt Repo" link="https://github.com/edvardakerman/Portfolio-NextJs" />
            </div>

            {/* Galaga */}
            <div className='place-self-center lg:place-self-start mt-16 lg:mt-0 order-7 lg:order-8'>
                <Desktop image="../galaga.png" />
            </div>
            <div className="text-sm text-center lg:text-right lg:text-base text-neutral-600 dark:text-neutral-200 order-8 lg:order-7">
            <Info title="Galaga 🚀" desc="The Galaga project is an object-oriented Java game built with JavaFX, inspired by the classic arcade shooter. Players control a spaceship to battle waves of enemies, with intuitive controls and retro-style gameplay." class="bg-zinc-700 hover:bg-zinc-800" image="../git.png" text="Projekt Repo" link="https://github.com/edvardakerman/galaga" />
            </div>

            {/* Resturant */}
            <div className='place-self-center lg:place-self-end mt-16 lg:mt-0 order-9 lg:order-10'>
                <Phone image="../foodfinder.png" />
            </div>
            <div className="text-sm text-center lg:text-left lg:text-base text-neutral-600 dark:text-neutral-200 order-9 lg:order-10">
                <Info title="Restaurant App 🍔" desc="The Restaurant Search App is a mobile application built with React Native, allowing users to search and filter restaurants based on price, ratings and food. It offers a simple and intuitive interface to help users find dining options that meet their preferences." class="bg-zinc-700 hover:bg-zinc-800" image="../git.png" text="Projekt Repo" link="https://github.com/edvardakerman/Restaurant-Search-App" />
            </div>

            {/* Yahtzee */}
            <div className='place-self-center lg:place-self-start mt-16 lg:mt-0 order-11 lg:order-12'>
                <Desktop image="../yahtzee.png" />
            </div>
            <div className="text-sm text-center lg:text-right lg:text-base text-neutral-600 dark:text-neutral-200 order-12 lg:order-11">
                <Info title="Yatzy 🎲🎲🎲🎲🎲" desc="The Yahtzee game is a terminal-based, object-oriented Python project that supports 1-4 players, allowing for a fun multiplayer experience. Download this game and try it out to enjoy the classic dice game and challenge your friends." class="bg-zinc-700 hover:bg-zinc-800" image="../git.png" text="Projekt Repo" link="https://github.com/edvardakerman/Yahzee" />
            </div>
        </div>
    );
};

export default projectGallery;