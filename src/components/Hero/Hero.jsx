import React from "react";

function Hero() {
  return (
    <section className="container relative flex items-center justify-between mt-12 z-10 ">
      <div className="content flex flex-col items-center justify-center text-white z-10 m-auto">
        <h1 className="title text-7xl font-black mb-8 font-[roboto] m-auto">
          Hi, I'm KratosOP
        </h1>
        <p className="description text-3xl font-[roboto] mb-12 text-center m-auto">
          I'm a full-stack web developer using MERN STACK. Reach out if you'd
          like to learn more!
        </p>
        <a
          href="#mailto:20031010.aman@gmail.com"
          className="contactBtn no-underline bg-[#576cbc] text-white rounded-[100px] text-3xl font-semibold py-4 px-6 m-auto"
        >
          Contact me
        </a>
      </div>
    </section>
  );
}

export default Hero;
