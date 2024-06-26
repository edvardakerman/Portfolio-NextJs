import React from 'react';

const terminal = () => {
    return (
        <div
            className="block rounded-lg bg-white shadow-xl h-[300px] w-[300px] md:w-[300px] lg:w-[400px]">
            <div
                className="border-b-2 rounded-t text-sm bg-gray-300 px-1 py-1 dark:border-neutral-600 dark:text-neutral-50 flex">
                <div className='w-4/12'>
                    <span className='inline-block align-middle w-4 h-4 ml-1.5 bg-red-500 rounded-full'></span>
                    <span className='inline-block align-middle w-4 h-4 ml-1.5 bg-yellow-500 rounded-full'></span>
                    <span className='inline-block align-middle w-4 h-4 ml-1.5 bg-green-500 rounded-full'></span>
                </div>
                <div className='w-4/12 text-center'>
                    <span className='inline-block align-middle'>Galaga</span>
                </div>
            </div>
            <div className="-mt-1">
                <img src='../gameplay.png' alt='galaga' className='rounded-b' />
            </div>
        </div>
    );
};

export default terminal;