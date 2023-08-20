function Footer() {
    return (
        <footer id='contact' className=' mt-16 py-8 w-[80%] mx-auto border-t flex justify-between items-center'>
            <a href="#">
                <h1 className='text-2xl font-bold transition duration-300 hover:text-indigo-500'>Jose.</h1>
            </a>
            <div className='flex items-center justify-center gap-8'>
                <a className='text-sm font-medium transition duration-300 hover:text-indigo-500' href="#journey">Journey</a>
                <a className='text-sm font-medium transition duration-300 hover:text-indigo-500' href="#projects">Projects</a>
                <a className='text-sm font-medium transition duration-300 hover:text-indigo-500' href="#about">About</a>
            </div>
        </footer>
    )
}

export default Footer
