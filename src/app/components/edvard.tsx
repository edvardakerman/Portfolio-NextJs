import React from 'react';
import Button from './button';

const edvard = () => {
    return (
        <div>
            <div className="grid grid-rows-3 grid-cols-1 lg:grid-flow-col items-center justify-items-stretch shadow-xl rounded-b-xl lg:rounded-r-xl">
                <div className="row-span-3 place-self-center">
                    <img src="../IMG_4096.JPG" alt='edvard' className='object-cover h-48 w-48 rounded-full lg:rounded-none lg:rounded-l-xl' />
                </div>
                <div className="row-span-2 col-span-2 px-5 text-center lg:text-left my-4">
                    <h1 className='text-2xl'>Edvard Åkerman</h1>
                    <div className='my-2'>
                        <h4 className='text-neutral-600'>Fullstack Developer </h4>
                        <h4 className='text-neutral-600'>Systems Scientist </h4>
                    </div>
                </div>
                <div className="row-span-1 col-span-2 pb-5 px-5 space-x-5">
                    <Button color="bg-zinc-700 hover:bg-zinc-800" icon="../git.png" text="Github" link="https://github.com/edvardakerman" />
                    <Button color="bg-blue-700 hover:bg-blue-800" icon="../linkedin-icon.webp" text="LinkedIn" link="https://www.linkedin.com/in/edvardakerman/" />
                </div>
            </div>
        </div>
    );
};

export default edvard;