import React from "react";

function Hero() {
  return (
    <section className="relative flex sm:flex-col items-center justify-between mt-12 z-10">
      <div className="h-52 w-52 hidden sm:block">
        <img
          src="https://imgs.search.brave.com/42flTzuOeEnVUP3anL_RFL1nL0PDI4fPWFfkVEx6F64/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQva3JhdG9zLXBp/Y3R1cmVzLTRhaXdy/eWZ1Yng3cGRoZ2Eu/anBn"
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
