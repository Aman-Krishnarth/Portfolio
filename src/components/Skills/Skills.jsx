import React from "react";
import skills from "../../data/skills.json";

function Skills() {
  return (
    <section id="skills" className=" text-white">
      <h2 className="text-white text-4xl tracking-widest font-bold mb-7 text-center">
        SKILLS
      </h2>

      <div className=" grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 p-4">
        {skills.map((skill, id) => {
          return (
            <div className="bg-[#0c4891] grid grid-rows-[1fr_auto] w-full md:w-3/4 rounded-xl m-auto" key={id}>
              <div className="h-56 w-3/4 m-auto p-3">
                <img
                  src={skill.imageUrl}
                  alt=""
                  className="h-full w-full rounded-md"
                />
              </div>
              <div className="bg-green-300 rounded-b-xl p-3">
                <h3 className="mb-2 text-center font-bold tracking-wider text-2xl">
                  {skill.title}
                </h3>

                <div className="h-2 bg-red-400 mb-2 w-[90%] m-auto rounded">
                  <div
                    className="h-full bg-gray-400 rounded"
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
