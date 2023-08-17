import NavbarLink from './NavbarLink'

export default function Navbar() {
    return (
        <nav className='flex items-center justify-between p-6 '>
            <a href="" className='text-4xl font-bold transition duration-300 hover:text-gray-300'>JOSE.</a>
            <svg onClick={() => document.querySelector('.lists').classList.toggle("hidden")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="z-50 w-8 h-8 cursor-pointer md:hidden hover:stroke-gray-300 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            <ul className='hidden gap-8  menu__lists md:flex'>
                <NavbarLink name="Home" />
                <NavbarLink name="Journey" />
                <NavbarLink name="Projects" />
                <NavbarLink name="About" />
                <NavbarLink name="Contact" />
            </ul>
        </nav>
    )
}