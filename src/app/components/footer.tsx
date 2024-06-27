import React from 'react';

const footer = () => {
    return (
        <nav className='mt-16 mb-1 sm:mt-16 py-6 px-5 mx-auto bg-white md:flex justify-between items-center border-t-2'>
            <div>
                <a className='text-base cursor-pointer flex items-center 
      text-gray-800' href='#'>© 2024 Edvard Åkerman</a>
            </div>
            <div
                className='mt-5 md:mt-2'>
                <ul className='flex justify-between md:space-x-12'>
                    <li>
                        <a className="hover:text-gray-500 text-xs" href="#projekt">Projekt</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500 text-xs" href="#utbildning">Utbildning</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500 text-xs" href="#kontakt">Kontakt</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default footer;