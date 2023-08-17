export default function ExperienceList({ name, university, year }) {
    return (
        <div className='border-b py-7 border-b-[#414344] flex justify-between cursor-pointer group '>
            <div className='flex flex-col gap-1 '>
                <h2 className='transition duration-300 uppercase text-xl font-medium group-hover:text-indigo-500'>{name}</h2>
                <p className='transition duration-300 text-[#868e96] text-sm group-hover:text-indigo-200 '>{university}</p>
            </div>
            <span className='transition duration-300 self-end text-[#868e96] text-sm px-6 group-hover:text-green-500'>&#8226; {year}</span>
        </div>
    )
}