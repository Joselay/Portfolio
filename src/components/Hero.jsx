import profile from "../assets/profile.png";
import brand1 from "../assets/brand1.svg";
import brand2 from "../assets/brand2.svg";
import brand3 from "../assets/brand3.svg";
import brand4 from "../assets/brand4.svg";
import { useLayoutEffect } from "react";
import gsap from "gsap";

export default function Hero() {
  useLayoutEffect(() => {
    gsap.fromTo(
      ".hero__image",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, delay: 1, ease: "power2.out" }
    );
    gsap.fromTo(
      ".hero__header",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "<35%"
    );
    gsap.fromTo(
      ".hero__name",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "<30%"
    );
    gsap.fromTo(
      ".hero__description",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "<25%"
    );
    gsap.fromTo(
      ".hero__buttons",
      { opacity: 0 },
      { opacity: 1, duration: 2, ease: "power4.out" },
      "<35%"
    );

    gsap.fromTo(
      ".brand-0",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
      "<"
    );
    for (let i = 1; i <= 4; i++) {
      gsap.fromTo(
        `.brand-${i}`,
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: "power2.out" },
        "<10%"
      );
    }
  }, []);

  return (
    <main>
      <section className="flex flex-col items-center w-full gap-8 py-6 justfy-center md:py-16 lg:gap-0 lg:flex-row-reverse lg:pr-24 lg:pl-12 lg:pt-24 xl:justify-between xl:p-0 xl:pl-32 xl:mt-20">
        <figure className="lg:w-[70%] xl:ml-12 ">
          <img
            className="w-56 rounded-full hero__image md:w-72 lg:w-full xl:w-[70%]"
            src={profile}
            alt=""
          />
        </figure>
        <div className="flex flex-col items-center justify-center gap-12 lg:items-start lg:mx-32 lg:w-full xl:w-[50%] ">
          <h1 className=" leading-normal hero__header w-[80%] text-4xl font-bold text-center lg:text-5xl  lg:w-full lg:text-left xl:text-6xl">
            <span className="font-serif w-full bg-300% text-5xl font-bold text-transparent animate-gradient hero__name bg-clip-text bg-gradient-to-r from-pink-700 via-indigo-500 to-green-400 ">
              Hello, I'm Jose,{" "}
            </span>
            creative designer based in Cambodia.
          </h1>
          <p className="hero__description text-gray-300 w-[80%] text-center leading-7 lg:text-lg lg:text-left lg:w-full xl:text-xl">
            A Product Designer and Visual Developer in Cambodia. I specialize in
            UI/UX Design, Responsive Web Design, and Visual Development.
          </p>
          <div className="flex gap-4 hero__buttons lg:gap-3 lg:w-full xl:gap-8">
            <button className="px-6 py-3 text-black uppercase transition duration-300 bg-white border border-white rounded-full hover:bg-transparent hover:text-white ">
              get in touch
            </button>
            <button className="px-6 py-3 text-white uppercase transition duration-300 border rounded-full hover:bg-white hover:text-black lg:p-0 lg:px-6">
              view all works
            </button>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center mt-12 text-2xl font-bold gap-14 lg:gap-16 ">
        <h1 className="brand-0">Trusted by leading brands</h1>
        <figure className="flex flex-col items-center justify-center gap-14 md:gap-20 lg:flex-row lg:gap-20">
          <img className="w-40 brand-1" src={brand1} alt="" />
          <img className="w-40 brand-2" src={brand2} alt="" />
          <img className="w-40 brand-3" src={brand3} alt="" />
          <img className="w-40 brand-4" src={brand4} alt="" />
        </figure>
      </section>
    </main>
  );
}
