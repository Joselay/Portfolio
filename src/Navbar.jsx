export default function Navbar() {
    return (
        <nav className='flex justify-between items-center p-6'>
            <a href="#" className='font-bold text-4xl transition duration-300 hover:text-gray-300'>JOSE.</a>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:hidden cursor-pointer hover:stroke-gray-300 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            <ul className='hidden md:flex'>
                <li><a href="">Home</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Blog</a></li>
            </ul>
            <a className='uppercase hidden md:block' href="#">let's talk</a>
        </nav>
    )
}