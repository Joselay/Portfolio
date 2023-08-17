import profile from './assets/profile.jpg';
import Skill from './Skill';

function About() {
    return (
        <section id="about" className='w-[80%] mx-auto pt-32 flex flex-col gap-14 justify-center items-center font-serif text-[#e2e2e2]'>
            <img className='mx-auto rounded-full w-80' src={profile} alt="" />
            <div className='flex flex-col gap-6'>
                <h2 className='text-[#868e96]'>About Me</h2>
                <h1 className='text-3xl font-bold'>Hey, I'm <span className='font-serif w-full bg-300% text-3xl font-bold text-transparent animate-gradient hero__name bg-clip-text bg-gradient-to-r from-pink-700 via-indigo-500 to-green-400 '>Jose</span></h1>
                <p className='text-sm leading-6'>Hey, I'm Jose! I'm a passionate web developer with a strong focus on front-end development. I love creating beautiful and user-friendly websites.</p>
            </div>
            <div className='flex flex-col gap-4'>
                <h2 className='text-[#868e96]'>Skills</h2>
                <div className='flex flex-wrap items-center gap-2 '>
                    <Skill skill="Web Design" />
                    <Skill skill="Figma" />
                    <Skill skill="Adobe XD" />
                    <Skill skill="Webflow" />
                    <Skill skill="React" />
                    <Skill skill="Vue" />
                    <Skill skill="Angular" />
                    <Skill skill="Tailwind CSS" />
                    <Skill skill="Java" />
                    <Skill skill="C#" />
                    <Skill skill="Frontend" />
                    <Skill skill="Backend" />
                </div>
            </div>
            <div className='flex flex-col gap-5 pt-8'>
                <h2 className='text-[#868e96]'>Contact Me</h2>
                <h1 className='text-2xl font-bold'>Get in touch</h1>
                <p className='text-sm text-[#e4e4e4] leading-6'>Feel free to reach out to me for any web development needs or inquiries. Let's collaborate and create something amazing together.</p>
            </div>
            <div className='flex flex-col self-start gap-4'>
                <h2 className='text-[#868e96]'>Follow me on social</h2>
                <div className='flex items-center gap-4'>
                    <a href="https://www.linkedin.com/in/smaetongmenglay/" target='_blank' rel="noopener noreferrer" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin hover:fill-[#888888]" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                    </a>
                    <a href="https://t.me/zzJose" target='_blank' rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telegram hover:fill-[#888]" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                        </svg>
                    </a>
                    <a href="https://www.facebook.com/menglaysmae/" target='_blank' rel="noopener noreferrer">

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook hover:text-[#888888]" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                    </a>
                    <a href="https://github.com/Joselay" target='_blank' rel="noopener noreferrer">

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github hover:text-[#888888]" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                    </a>
                </div>
            </div>
            <form className='grid grid-cols-2 gap-3'>
                <input className='bg-[#222222] py-3 text-sm px-4 rounded-md outline-none text-[#eee] placeholder-[#868e96]' type="text" placeholder='First Name' />
                <input className='bg-[#222] text-[#eee] py-3 text-sm px-4 rounded-md outline-none placeholder-[#868e96]' type="text" placeholder='Last Name' />
                <input className='placeholder-[#868e96] bg-[#222] text-[#eee] py-3 text-sm px-4 rounded-md outline-none col-span-2' type="email" placeholder='Email' />
                <input className='bg-[#222] text-[#eee] py-3 placeholder-[#868e96] text-sm px-4 rounded-md outline-none col-span-2' type="text" placeholder='Website' />
                <textarea placeholder='Message' className='bg-[#222] col-span-2 placeholder-[#868e96] text-[#eee] py-2 px-4 rounded-md outline-none text-sm' name="messageContent" cols="30" rows="10" />
                <button onClick={(e) => e.preventDefault()} className='bg-[#eee] transition duration-300 rounded-[5px] text-black py-[12px] col-span-2 border  hover:bg-transparent hover:text-[#eee] outline-none'>Submit</button>
            </form>
        </section>
    )
}

export default About
