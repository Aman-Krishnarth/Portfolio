import React, { useEffect } from "react";
import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className="  mt-[76px] text-white p-2 mx-auto"
      id="projects"
      data-aos="fade-right"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <h2 className=" text-4xl font-bold  tracking-wider text-center">
        PROJECTS
      </h2>

      <div className=" mt-9 justify-center items-center gap-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {projects.map((project, id) => {
          return <ProjectCard project={project} id={id} key={id} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
