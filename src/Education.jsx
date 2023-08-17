import ExperienceList from './ExperienceList'

export default function Education({ experience }) {
    return (
        <div className='flex flex-col gap-3 justify-center'>
            <h1 className='self-start cursor-pointer font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-indigo-500 from-5% via-red-500 via-20% to-orange-400 to-70%'>{experience}</h1>
            <ExperienceList name="setec institute" university={experience === 'Education' ? "Frontend Development Degree" : "Product Manager"} year={experience === 'Education' ? "2021-2026" : "2022-2023"} />
            <ExperienceList name="Udemy" university={experience === 'Education' ? "UX/UI Master" : "Visual Designer"} year={experience === 'Education' ? "2021-2024" : "2022-2023"} />
            <ExperienceList name="frontend masters" university={experience === 'Education' ? "Web Development Degree" : "UI Designer"} year={experience === 'Education' ? "2021-2026" : "2022-2023"} />

        </div>
    )
}