import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <section
      className="relative flex sm:flex-col items-center justify-between mt-12 z-10"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <div className="h-56 w-56 hidden sm:block">
        <img
          src="https://cdn.pixabay.com/photo/2024/05/20/16/24/ai-generated-8775742_1280.png"
          alt=""
          className="h-full w-full rounded-full"
        />
      </div>

      <div className="content flex flex-col items-center justify-center text-white z-10 m-auto">
        <h1 className=" text-7xl font-black mb-8 font-[roboto] text-center">
          Hi, I'm Aman Krishnarth
        </h1>
        <p className=" text-3xl font-[roboto] mb-12 text-center m-auto w-1/2">
          I'm a full-stack web developer using MERN STACK. Reach out if you'd
          like to learn more!
        </p>
        <a
          href="mailto:20031010.aman@gmail.com"
          className=" no-underline bg-[#576cbc] text-white rounded-[100px] text-3xl font-semibold py-4 px-6 m-auto"
        >
          Contact me
        </a>
      </div>
    </section>
  );
}

export default Hero;
