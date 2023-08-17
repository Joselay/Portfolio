import profile from './assets/profile.jpg'
import brand1 from './assets/brand1.svg'
import brand2 from './assets/brand2.svg'
import brand3 from './assets/brand3.svg'
import brand4 from './assets/brand4.svg'

export default function Hero() {
    return (
        <main>
            <section className='flex flex-col items-center justfy-center gap-8 py-6'>
                <figure>
                    <img className='w-40 rounded-full' src={profile} alt="" />
                </figure>
                <h1 className='w-[80%] text-4xl font-bold text-center'><span className='w-full font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I'm Jose, </span>creative designer based in Cambodia.</h1>
                <p className='text-gray-300 w-[80%] text-center leading-7'>A Product Designer and Visual Developer in Cambodia. I specialize in UI/UX Design, Responsive Web Design, and Visual Development.</p>
                <div className='flex gap-4'>
                    <button className="uppercase transition duration-300 bg-white rounded-full px-6 py-3 text-black border border-white hover:bg-transparent hover:text-white">get in touch</button>
                    <button className="uppercase transition duration-300 rounded-full px-6 py-3 text-white border hover:bg-white hover:text-black">view all works</button>
                </div>
            </section>
            <section className='flex flex-col justify-center items-center gap-14 mt-12 text-2xl font-bold'>
                <h1>Trusted by leading brands</h1>
                <figure className='flex flex-col gap-14 justify-center items-center'>
                    <img className='w-40' src={brand1} alt="" />
                    <img className='w-40' src={brand2} alt="" />
                    <img className='w-40' src={brand3} alt="" />
                    <img className='w-40' src={brand4} alt="" />
                </figure>
            </section>
        </main>
    )
}