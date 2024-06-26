import React from 'react';

const Terminal = () => {
    return (
        <div
            className="block rounded-lg bg-white shadow-xl border max-w-2xl mt-5 sm:h-60">
            <div
                className="border-b-2 rounded-t text-sm bg-gray-300 border-neutral-100 px-1 py-1 dark:border-neutral-600 dark:text-neutral-50 flex">
                <div className='w-4/12 sm:w-3/12'>
                    <span className='inline-block align-middle w-4 h-4 ml-1.5 bg-red-500 rounded-full'></span>
                    <span className='inline-block align-middle w-4 h-4 ml-1.5 bg-yellow-500 rounded-full'></span>
                    <span className='inline-block align-middle w-4 h-4 ml-1.5 bg-green-500 rounded-full'></span>
                </div>
                <div className='w-8/12 sm:w-6/12 sm:text-center'>
                    <span className='inline-block align-middle'>Terminal -zsh - 80x24</span>
                </div>
            </div>
            <div className="p-3">
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-200 sm:pr-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>
        </div>
    );
}

export default Terminal;