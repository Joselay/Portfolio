function Footer() {
    return (
        <footer className='mt-16 py-8 w-[80%] mx-auto border-t flex justify-between items-center'>
            <a href="#">
                <h1 className='text-2xl font-bold transition duration-300 hover:text-indigo-500'>Jose.</h1>
            </a>
            <div className='flex items-center justify-center gap-5'>
                <a className='text-sm font-medium transition duration-300 hover:text-indigo-500' href="#">Journey</a>
                <a className='text-sm font-medium transition duration-300 hover:text-indigo-500' href="#">Projects</a>
                <a className='text-sm font-medium transition duration-300 hover:text-indigo-500' href="#">About</a>
                <button className='transition duration-300 px-4 py-[10px] font-medium bg-indigo-500 rounded-[5px] text-sm hover:bg-[#595cd9] '>Contact</button>
            </div>
        </footer>
    )
}

export default Footer
