import ProjectCard from './ProjectCard'

export default function Projects() {
    return (
        <section id='projects' className='flex flex-col gap-10'>
            <div className='flex flex-col gap-8'>
                <h1 className='cursor-pointer transition duration-300 text-center text-4xl font-bold  hover:-translate-y-0.5'>Look at My <span className='font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-red-500 via-60% to-orange-400 to-80%'>Projects.</span></h1>
                <p className='text-center w-[80%] mx-auto  text-gray-300 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sequi nulla maiores cupiditate ullam dolore culpa ut doloremque officiis quibusdam?</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 place-items-center gap-y-8'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </section>
    )
}
