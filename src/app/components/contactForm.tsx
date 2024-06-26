import React from 'react';
import Button from './button';

const contactForm = () => {
    return (
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-6 w-3/4 sm:max-w-2xl">
                <div className=''>
                    <label htmlFor="email" className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300">Din email</label>
                    <input type="email" id="email" className="shadow-lg bg-gray-50 border border-black text-black text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="johndoe@mail.com" required></input>
                </div>
                <div className=''>
                    <label htmlFor="email" className="block mt-0 sm:mt-0 mb-2 text-base font-medium text-gray-900 dark:text-gray-300">Ämne</label>
                    <input type="text" id="text" className="shadow-lg bg-gray-50 border border-black text-black text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="Ämne" required></input>
                </div>
                <div className="sm:col-span-2 sm:mt-0 mt-0">
                    <label htmlFor="message" className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-400">Your message</label>
                    <textarea id="message" rows={6} className="block p-2.5 w-full text-base text-black bg-gray-50 rounded-lg shadow-lg border border-black focus:ring-primary-500 focus:border-primary-500" placeholder="Lämna ett meddelande..."></textarea>
                </div>
                <div className='sm:col-span-2 sm:mt-0 mt-0 flex justify-center'>
                    <Button color="bg-sky-600 hover:bg-sky-700 justify-center" icon="../send.png" text="Skicka Mail" link="" />
                </div>
            </form>
    );
};

export default contactForm;