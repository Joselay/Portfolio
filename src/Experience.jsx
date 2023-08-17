import Education from './Education'

export default function Experience() {
    return (
        <article className='flex flex-col px-10 py-20  gap-14'>
            <Education experience="Education" />
            <Education experience="Work Experience" />
        </article>
    )
}