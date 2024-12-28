const Navbar = () => {
    return (
        <header className='w-[90%] py-3 px-5 mx-auto bg-white sticky top-0 z-50 sm:flex justify-between items-center border-b-2 mb-10 shadow-xl rounded-lg'>
            <div>
                <a className='font-bold text-2xl cursor-pointer flex items-center 
      text-gray-800' href='#'> &#62; Edvard Åkerman</a>
            </div>
            <div
                className='mt-5 sm:mt-2'>
                <ul className='flex justify-center space-x-12'>
                    <li>
                        <a className="hover:text-gray-500" href="#projects">Projects</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#education">Education</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar