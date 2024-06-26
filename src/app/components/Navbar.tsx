const Navbar = () => {
    return (
        <header className='w-[90%] py-3 px-5 mx-auto bg-white sticky top-0 z-50 md:flex justify-between items-center border-b-2 mb-10 shadow-xl rounded-lg'>
            <div>
                <a className='font-bold text-2xl cursor-pointer flex items-center 
      text-gray-800' href='#'> &#62; Edvard Åkerman</a>
            </div>
            <div
                className='mt-5 md:mt-2'>
                <ul className='flex justify-between md:space-x-12'>
                    <li>
                        <a className="hover:text-gray-500" href="#projekt">Projekt</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#utbildning">Utbildning</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#kontakt">Kontakt</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar