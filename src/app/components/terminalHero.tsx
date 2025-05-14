import React, { ReactNode } from 'react';

type TerminalProps = {
    children: ReactNode;
    terminalClass?: string;
    terminalName?: string;
};


const Terminal = ({ children, terminalClass, terminalName }: TerminalProps) => {
    return (
        <div
            className="block rounded-lg bg-white shadow-xl max-w-7xl mt-5">
            <div
                className={`${terminalClass} border-b-2 rounded-t text-sm px-1 py-1 flex`}>
                <div className='w-4/12 sm:w-3/12'>
                    <span className='inline-block align-middle w-4 h-4 ml-1.5 bg-red-500 rounded-full'></span>
                    <span className='inline-block align-middle w-4 h-4 ml-1.5 bg-yellow-500 rounded-full'></span>
                    <span className='inline-block align-middle w-4 h-4 ml-1.5 bg-green-500 rounded-full'></span>
                </div>
                <div className='w-8/12 sm:w-6/12 sm:text-center'>
                    <span className='inline-block align-middle'>{terminalName}</span>
                </div>
            </div>
            <div className="p-3">
                {children}
            </div>
        </div>
    );
}

export default Terminal;