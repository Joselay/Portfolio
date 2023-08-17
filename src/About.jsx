import profile from './assets/profile.jpg';
import facebook from './assets/facebook.svg';
import instagram from './assets/instagram.svg';
import github from './assets/github.svg';
import linkedin from './assets/linkedin.svg';
import Skill from './Skill';

function About() {
    return (
        <section className='w-[80%] mx-auto pt-32'>
            <img className='mx-auto rounded-full w-80' src={profile} alt="" />
            <div>
                <h2 className='text-[#868e96]'>About Me</h2>
                <h1>Hey, I'm Jose</h1>
                <p>Hey, I'm Jose! I'm a passionate web developer with a strong focus on front-end development. I love creating beautiful and user-friendly websites.</p>
            </div>
            <div>
                <h2>Skills</h2>
                <div className='flex flex-wrap'>
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
            <div>
                <h2>Contact Me</h2>
                <h1>Get in touch</h1>
                <p>Feel free to reach out to me for any web development needs or inquiries. Let's collaborate and create something amazing together.</p>
            </div>
            <div>
                <h2>Follow me on social</h2>
                <div className='flex items-center gap-4'>
                    <a href="#" >
                        <img src={linkedin} alt="Linkedin Icon" />
                    </a>
                    <a href="#">
                        <img src={instagram} alt="Instagram Icon" />
                    </a>
                    <a href="#">

                        <img src={facebook} alt="Facebook Icon" />
                    </a>
                    <a href="#">

                        <img src={github} alt="Github Icon" />
                    </a>
                </div>
            </div>
            <form className='grid grid-cols-2 gap-2 w-[90%] mx-auto'>
                <input className='bg-[#1C1C22] py-3 text-sm px-4 rounded-md outline-none text-[#868e96]' type="text" placeholder='First Name' />
                <input className='bg-[#1C1C22] text-[#868e96] py-3 text-sm px-4 rounded-md outline-none' type="text" placeholder='Last Name' />
                <input className='bg-[#1C1C22] text-[#868e96] py-3 text-sm px-4 rounded-md outline-none col-span-2' type="email" placeholder='Email' />
                <input className='bg-[#1C1C22] text-[#868e96] py-3 text-sm px-4 rounded-md outline-none col-span-2' type="text" placeholder='Website' />
                <textarea placeholder='Message' className='bg-[#1C1C22] col-span-2 text-[#868e96] py-2 px-4 outline-none' name="messageContent" cols="30" rows="10" />
            </form>
        </section>
    )
}

export default About
