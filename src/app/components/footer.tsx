import React from 'react';

const footer = () => {
    return (
        <nav className='mt-16 py-3 px-5 mx-auto bg-white sm:flex justify-between items-center border-t-2 shadow-xl rounded-b-lg'>
            <div>
                <a className='text-base cursor-pointer flex items-center 
      text-gray-800' href='#'>© 2025 Edvard Åkerman</a>
            </div>
            <div
                className='mt-5 sm:mt-2'>
                <ul className='flex justify-center space-x-12'>
                    <li>
                        <a className="hover:text-gray-500 text-xs" href="#part-one">Del 1</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500 text-xs" href="#part-two">Del 2</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default footer;