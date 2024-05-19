function NavbarLink({ name, id }) {
    return (
        <li><a href={id} className='transition duration-300 hover:text-indigo-500 xl:text-lg'>{name}</a></li>
    )
}

export default NavbarLink
