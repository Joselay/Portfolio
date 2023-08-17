import profile from './assets/profile.jpg'
import brand1 from './assets/brand1.svg'
import brand2 from './assets/brand2.svg'
import brand3 from './assets/brand3.svg'
import brand4 from './assets/brand4.svg'
// import gsap from 'gsap'

// gsap.fromTo('.hero__image', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, delay: 1, ease: 'power2.out' })
// gsap.fromTo('.hero__header', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, delay: 1.5, ease: 'power2.out' })
// gsap.fromTo('.hero__name', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, delay: 2, ease: 'power2.out' })
// gsap.fromTo('.hero__description', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, delay: 1.5, ease: 'power2.out' })
// gsap.fromTo('.hero__buttons', { opacity: 0 }, { opacity: 1, duration: 2, delay: 2, ease: 'power4.out' })
// gsap.fromTo('.hero__trusted', { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1, delay: 2, ease: 'power2.out' })

// for (let i = 1; i <= 4; i++) {
//     gsap.fromTo(`.brand-${i}`, { opacity: 0 }, { opacity: 1, duration: 2, delay: 2.5, ease: 'power2.out' })
// }

export default function Hero() {
    return (
        <main>
            <section className='flex flex-col items-center gap-8 py-6 justfy-center'>
                <figure>
                    <img className='w-40 rounded-full hero__image' src={profile} alt="" />
                </figure>
                <h1 className='hero__header w-[80%] text-4xl font-bold text-center'><span className='w-full text-5xl font-bold text-transparent hero__name bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I'm Jose, </span>creative designer based in Cambodia.</h1>
                <p className='hero__description text-gray-300 w-[80%] text-center leading-7'>A Product Designer and Visual Developer in Cambodia. I specialize in UI/UX Design, Responsive Web Design, and Visual Development.</p>
                <div className='flex gap-4 hero__buttons'>
                    <button className="px-6 py-3 text-black uppercase transition duration-300 bg-white border border-white rounded-full hover:bg-transparent hover:text-white">get in touch</button>
                    <button className="px-6 py-3 text-white uppercase transition duration-300 border rounded-full hover:bg-white hover:text-black">view all works</button>
                </div>
            </section>
            <section className='flex flex-col items-center justify-center mt-12 text-2xl font-bold gap-14'>
                <h1 className='hero__trusted'>Trusted by leading brands</h1>
                <figure className='flex flex-col items-center justify-center gap-14'>
                    <img className='w-40 brand-1' src={brand1} alt="" />
                    <img className='w-40 brand-2' src={brand2} alt="" />
                    <img className='w-40 brand-3' src={brand3} alt="" />
                    <img className='w-40 brand-4' src={brand4} alt="" />
                </figure>
            </section>
        </main>
    )
}