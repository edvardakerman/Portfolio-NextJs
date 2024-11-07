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
                <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-200 sm:pr-10">
                👨‍💻 Full-stack developer and systems scientist-in-training, co-founder of a web development consultancy. Passionate about building innovative solutions and always exploring new tech. Whether it's coding sleek web apps or diving into complex systems, I'm all about pushing the boundaries of development. 🚀
                </p>
            </div>
        </div>
    );
}

export default Terminal;