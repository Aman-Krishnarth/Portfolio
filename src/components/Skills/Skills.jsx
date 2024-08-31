import React, { useEffect } from "react";
import skills from "../../data/skills.json";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="skills"
      className=" text-white"
      data-aos="fade-right"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <h2 className="text-white text-4xl tracking-widest font-bold mb-7 text-center">
        SKILLS
      </h2>

      <div className=" grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 p-4">
        {skills.map((skill, id) => {
          return (
            <div
              className="bg-[#4c73a3e0] grid grid-rows-[1fr_auto] w-full md:w-3/4 rounded-xl m-auto"
              key={id}
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <div className="h-56 w-3/4 m-auto p-3">
                <img
                  src={skill.imageUrl}
                  alt=""
                  className="h-full w-full rounded-md"
                />
              </div>
              <div className="bg-[#aba45bd3] rounded-b-xl p-3">
                <h3 className="mb-2 text-center font-bold tracking-wider text-2xl">
                  {skill.title}
                </h3>

                <div className="h-3 border-2 border-black bg-red-400 mb-2 w-[90%] m-auto rounded">
                  <div
                    className="h-full bg-green-500 rounded"
                    style={{ width: skill.proficiency }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
